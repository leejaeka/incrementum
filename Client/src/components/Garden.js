import React, {useEffect, useRef} from 'react'
import '../App.css';
import background from "../img/2dgrass.png";
import {MDBBox, MDBBtn, MDBIcon} from "mdbreact";

const WIDTH = 626;
const HEIGHT = 375;

const DISPLAY_WIDTH = 1110;


const Canvas = props => {
    const canvasRef = useRef(null);


    let freeSpace = [...Array(600).keys()];
    const treeData = new Map()

    const pickRandomPosition = () => {
        const idx = Math.floor(Math.random() * freeSpace.length);
        const position = freeSpace[idx]

        if (!freeSpace.length) {
            console.error("OUT OF SPACE");
            return -99;
        }

        // remove from freeSpace
        freeSpace = freeSpace.filter(i => i <= position - 20 || i >= position + 20);
        return position;
    }

    const drawRandomTree = () => {
        // console.log(window.innerWidth/WIDTH)
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        if (freeSpace.length) {
            const x = pickRandomPosition();
            if (x > 0) {
                const imageNum = Math.floor(Math.random() * 100) + 1 // 1 to 100

                // TODO: save to db
                treeData.set(x, imageNum);
                // console.log(`tree-${imageNum}.png at position ${x}`)

                const tree = new Image();
                tree.src = `/trees/tree-${imageNum}.png`;
                tree.onload = () => {
                    ctx.drawImage(tree, x, 260);
                }
            }
        }

    }

    // const draw = (ctx, frameCount) => {
    //     // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //     ctx.fillStyle = '#000000'
    //     // ctx.beginPath()
    //     // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    //     // ctx.fill()
    // }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.scale(DISPLAY_WIDTH / WIDTH, DISPLAY_WIDTH / WIDTH);
    }, []);

    // useEffect(() => {
    //
    //     const canvas = canvasRef.current
    //     const context = canvas.getContext('2d')
    //     let frameCount = 0
    //     let animationFrameId
    //
    //     //Our draw came here
    //     const render = () => {
    //         frameCount++
    //
    //         drawRandomTree(context, frameCount)
    //     }
    //     render()
    //
    //     return () => {
    //         window.cancelAnimationFrame(animationFrameId)
    //     }
    // }, [drawRandomTree])

    return <>
        <canvas style={{
            backgroundImage: `url(${background}`,
            backgroundSize: "contain"
        }} width={DISPLAY_WIDTH} height={(DISPLAY_WIDTH) / WIDTH * HEIGHT}
                ref={canvasRef} {...props} />
        <MDBBox display="flex" justifyContent="center">
            <MDBBtn onClick={drawRandomTree} tag="a" size="lg" floating
                    className="aqua-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1">
                <MDBIcon icon="bolt"/>
            </MDBBtn>

        </MDBBox></>
}

export default Canvas
