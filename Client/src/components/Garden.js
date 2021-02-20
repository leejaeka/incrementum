import React, {useEffect, useRef} from 'react'
import '../App.css';
import background from "../img/2dgrass.png";

const WIDTH = 626;
const HEIGHT = 375;


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

    const drawRandomTree = (ctx, frameCount) => {
        // console.log(frameCount)

        if (freeSpace.length) {
            const x = pickRandomPosition();
            if (x > 0) {
                const imageNum = Math.floor(Math.random() * 100) + 1 // 1 to 100

                // TODO: save to db
                treeData.set(x, imageNum);
                console.log(`tree-${imageNum}.png at position ${x}`)

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
        let frameCount = 0
        let animationFrameId

        //Our draw came here
        const render = () => {
            frameCount++
            drawRandomTree(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [drawRandomTree])

    return <canvas style={{
        backgroundImage: `url(${background}`,
        backgroundSize: "contain"
    }} width={WIDTH} height={HEIGHT}
                   ref={canvasRef} {...props} />
}

export default Canvas
