from flask import Flask
from flask import request, jsonify

# FOR TREE gen
import torch
from torch import nn
from tqdm.auto import tqdm
from torchvision.utils import make_grid
from skimage.util import random_noise
import numpy as np
from collections import OrderedDict
from torchvision import transforms
from PIL import Image
import base64
import json

app = Flask(__name__)

class Generator(nn.Module):
    '''
    Generator Class
    Values:
        z_dim: the dimension of the noise vector, a scalar
        im_chan: the number of channels in the images, fitted for the dataset used, a scalar
        hidden_dim: the inner dimension, a scalar
    '''
    def __init__(self, z_dim=64, im_chan=3, hidden_dim=64):
        super(Generator, self).__init__()
        self.z_dim = z_dim
        # Build the neural network
        self.gen = nn.Sequential(
            self.make_gen_block(z_dim, hidden_dim * 4),
            self.make_gen_block(hidden_dim * 4, hidden_dim * 2, kernel_size=2, stride=2),
            self.make_gen_block(hidden_dim * 2, hidden_dim),
            self.make_gen_block(hidden_dim, im_chan, kernel_size=4, final_layer=True),
        )

    def make_gen_block(self, input_channels, output_channels, kernel_size=3, stride=2, final_layer=False):
        '''
        Function to return a sequence of operations corresponding to a generator block of DCGAN;
        a transposed convolution, a batchnorm (except in the final layer), and an activation.
        Parameters:
            input_channels: how many channels the input feature representation has
            output_channels: how many channels the output feature representation should have
            kernel_size: the size of each convolutional filter, equivalent to (kernel_size, kernel_size)
            stride: the stride of the convolution
            final_layer: a boolean, true if it is the final layer and false otherwise 
                      (affects activation and batchnorm)
        '''
        if not final_layer:
            return nn.Sequential(
                nn.ConvTranspose2d(input_channels, output_channels, kernel_size, stride),
                nn.BatchNorm2d(output_channels),
                nn.ReLU(inplace=True),
            )
        else:
            return nn.Sequential(
                nn.ConvTranspose2d(input_channels, output_channels, kernel_size, stride=1),
                nn.Tanh(),
            )

    def forward(self, noise):
        '''
        Function for completing a forward pass of the generator: Given a noise tensor,
        returns generated images.
        Parameters:
            noise: a noise tensor with dimensions (n_samples, z_dim)
        '''
        x = noise.view(len(noise), self.z_dim, 1, 1)
        generated = self.gen(x)
        return generated

def get_noise(n_samples, z_dim, device='cpu'):
    '''
    Function for creating noise vectors: Given the dimensions (n_samples, z_dim)
    creates a tensor of that shape filled with random numbers from the normal distribution.
    Parameters:
      n_samples: the number of samples to generate, a scalar
      z_dim: the dimension of the noise vector, a scalar
      device: the device type
    '''
    return torch.randn(n_samples, z_dim, device=device)


#custom weights initialization called on netG and netD
def weights_init(m):
    if isinstance(m, nn.Conv2d) or isinstance(m, nn.ConvTranspose2d):
        torch.nn.init.normal_(m.weight, 0.0, 0.02)
    if isinstance(m, nn.BatchNorm2d):
        torch.nn.init.normal_(m.weight, 0.0, 0.02)
        torch.nn.init.constant_(m.bias, 0)
        



@app.route('/generate', methods=['GET'])
def generate():
	'''
	generate 16bits trees
	'''
	# Initialize variables
	z_dim = 64
	display_step = 50
	batch_size = 64
	lr = 0.0002
	beta_1 = 0.5
	beta_2 = 0.999
	c_lambda = 10
	image_size = 16
	# Decide which device we want to run on
	device = torch.device("cuda:0" if (torch.cuda.is_available()) else "cpu")

	# create generator object
	gen = Generator(z_dim).to(device)
	gen_opt = torch.optim.Adam(gen.parameters(), lr=lr, betas=(beta_1, beta_2))
	gen = gen.apply(weights_init)

	# load generator
	gen.load_state_dict(torch.load('models/treegen3', map_location=torch.device('cpu')))
	gen.eval()
    # generate
	fake_noise = get_noise(64, 64, device=device)
	fake = gen(fake_noise)
	
	# Tensor remove back ground to 0 (black) then detach
	# image_remove_bg = torch.where(fake[1] < float(-0.5), -torch.ones_like(fake[1]), fake[1])
	image_detach = (fake[1]+1).detach().cpu()
	# Tensor inverse transformation
	image_rgb = abs(torch.ones_like(image_detach)*255-torch.floor((image_detach) * (torch.ones_like(image_detach)*127.5)))
	im = transforms.ToPILImage()(image_rgb)
	# save with background output
	#im.save("output/tree_with_bg.png")
	# Add transparent background
	im_rgb = im.convert("RGBA")
	datas = im_rgb.getdata()
	newData = []
	for item in datas:
		if item[0] < 75 and item[1] < 75 and item[2] < 75:
			newData.append((255,255,255,0))
		else:
			newData.append(item)
	im_rgb.putdata(newData)

	# save output
	im_rgb.save("output/tree.png")
	data = {}
	with open('output/tree.png', mode='rb') as file:
		img = file.read()
	data['img'] = base64.encodebytes(img).decode('utf-8')
	json.dumps(data)
	data['img'].replace('\n', '')
	if request.method == 'GET':
		return {'data': data}

		
#def main():
#	app.run(host='127.0.0.1', port=3001, debug=True)

if __name__ == '__main__':
    app.run()