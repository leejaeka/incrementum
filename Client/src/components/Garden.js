import React, {useEffect, useRef, useState} from 'react'
import '../App.css';
import background from "../img/2dgrass.png";
import {MDBBox, MDBBtn, MDBIcon} from "mdbreact";
import {updateUser} from "../utils/AuthHelper";
import fb from "firebase";

const WIDTH = 626;
const HEIGHT = 375;

const DISPLAY_WIDTH = 1110;


const Garden = ({user, setUser, setAuth, setOpenSavingDialog, savingAmount, setSavingAmount, save, setSave}) => {
    const canvasRef = useRef(null);
    const treeData = new Map()

    const [freeSpace, setFreeSpace] = useState([...Array(600).keys()])

    useEffect(() => {
        if (savingAmount && savingAmount > 0 && save) {
            saveMoney(savingAmount)
            setSavingAmount(0)
        }
        setSave(false)
    });

    const saveTree = (x, imageNum, base64) => {
        user.totalTrees += 1;
        user.tree.push({x: x, num: imageNum, img: base64});
        setUser({...user})

        updateUser(setAuth, user, setUser, {})
    };


    const saveMoney = (savingAmount) => {
        user.totalSavings += savingAmount
        user.savings.push({
            time: fb.firestore.Timestamp.now(),
            amount: savingAmount
        })
        setUser({...user})

        drawRandomTree()

        updateUser(setAuth, user, setUser, {totalTrees: user.totalTrees, totalSavings: user.totalSavings})
    };

    const pickRandomPosition = () => {
        const idx = Math.floor(Math.random() * freeSpace.length);
        const position = freeSpace[idx]

        if (!freeSpace.length) {
            console.error("OUT OF SPACE");
            return -99;
        }

        // remove from freeSpace
        setFreeSpace(freeSpace.filter(i => i <= position - 20 || i >= position + 20))
        return position;
    }

    const drawRandomTree = () => {

        fetch("https://tree-generate.herokuapp.com/generate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((data) => data.json())
            .then(data => {
                const base64 = data.data.img.replaceAll(/\s/g, '');
                const canvas = canvasRef.current
                const ctx = canvas.getContext('2d')


                const x = pickRandomPosition();
                if (x > 0) {


                    const imageNum = Math.floor(Math.random() * 100) + 1 // 1 to 100
                    treeData.set(x, imageNum);
                    // console.log(`tree-${imageNum}.png at position ${x}`)

                    const tree = new Image();
                    const ugly_tree = new Image();
                    tree.src = `/trees/tree-${imageNum}.png`;
                    ugly_tree.src = `data:image/gif;base64,${base64}`
                    tree.onload = () => {
                        ctx.drawImage(tree, x, 228, 32, 64);
                        ctx.drawImage(ugly_tree, x + 8, 340);
                    }
                    saveTree(x, imageNum, base64);

                }

            })
            .catch(err => {
                console.error(err)
            });


    }


    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.scale(DISPLAY_WIDTH / WIDTH, DISPLAY_WIDTH / WIDTH);


        user.tree.map(t => {
            const imageNum = t.num;
            const base64 = t.img;
            const x = t.x;
            const ctx = context;

            const tree = new Image();
            const ugly_tree = new Image();
            tree.src = `/trees/tree-${imageNum}.png`;
            ugly_tree.src = `data:image/gif;base64,${base64}`
            tree.onload = () => {
                ctx.drawImage(tree, x, 228, 32, 64);
                ctx.drawImage(ugly_tree, x + 8, 340);
            }
        });



    }, [user.tree]);

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
                ref={canvasRef}/>
        <MDBBox display="flex" justifyContent="center">
            <MDBBtn onClick={() => setOpenSavingDialog(true)} tag="a" size="lg" floating
                    className="color-block-5 mb-3 mx-auto rounded-circle z-depth-1">
                <MDBIcon icon="bolt"/>
            </MDBBtn>

        </MDBBox></>
}

export default Garden
