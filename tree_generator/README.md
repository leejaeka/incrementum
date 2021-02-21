# WGAN-GP REST-API (16bits tree generator)

To generate tree image, use GET from https://tree-generate.herokuapp.com/generate . Then use this python code >>base64.b64decode(data['img']) to decode the json file to image. (Note: there are \n in the string don't forget to remove them. You may find .replace('\n', '') useful.)

16 by 16 pixel tree generation using WGAN-GP. The project is best described with pictures below. All the trees are GAN generated meaning no two trees are the same! Here are some of my favorites.

<br/>

![main](/tree_generator/output/1.png)
![main](/tree_generator/output/2.png)
![main](/tree_generator/output/1res.png)
![main](/tree_generator/output/2res.png)
![main](/tree_generator/output/3res.png)
![main](/tree_generator/output/4res.png)

<br/>
Generation 100

![main](/tree_generator/output/t1.png)
<br/>
Generation 1000

![main](/tree_generator/output/t2.png)
<br/>
Generation 5000

![main](/tree_generator/output/t3.png)

<br/>
Generation 40000

![main](/tree_generator/output/t4.png)
