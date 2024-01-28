import { useRef, useState } from "react";
import walk1 from "./../assets/chars/mokey-walk-1.png";
import as from "./../assets/chars/walking-right.png";
import down from "./../assets/chars/walk-down.png";
import "./index.css";
import left from "./../assets/chars/walk-left.png";
import Block from "./components/blocks";

export default function Map() {
    const lastRef = useRef<null | HTMLDivElement>(null);
    const upRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = (direction: "up" | "down") => {
        if (direction == "up") {
            upRef?.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });


        } else {
            lastRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center', });
            if (upRef.current) {
                upRef.current.scrollBy(0, +100);
            }
        }
    };

    const [charImg, setCharImg] = useState(walk1);
    const [walk, setWalk] = useState(119);

    function handleChar(direction: "left" | "up" | "down" | "right") {
        switch (direction) {
            case "left":
                setCharImg(left)
                break;
            case "down":
                setCharImg(down)
                break;
            case "right":
                setCharImg(as)
                break;
            default:
                setCharImg(walk1)
                break;
        }
    }

    function handleWalk(event: React.KeyboardEvent<HTMLButtonElement>) {
        if (event.keyCode === 39 || event.keyCode === 68) {
            // right
            if (walk + 1 < 644) {
                handleChar("right");
                setWalk(walk + 1);
                if (walk + 1 === 70) {
                    alert("ITEM FOUNDED")
                }
            }
        }
        if (event.keyCode === 37 || event.keyCode === 65) {
            //left
            handleChar("left");
            if (walk - 1 > 0) {
                setWalk(walk - 1);
                if (walk - 1 === 70) {
                    alert("ITEM FOUNDED");
                }
            };
        }
        if (event.keyCode === 40 || event.keyCode === 83) {
            //down
            handleChar("down");
            if (walk + 18 < 644) {
                scrollToBottom("down")
                setWalk(walk + 18);
                if (walk + 18 === 70) {
                    alert("ITEM FOUNDED")
                }
            }
        }
        if (event.keyCode === 38 || event.keyCode === 87) {
            //up
            handleChar("up");
            if (walk - 17 > 0) {
                scrollToBottom("up")
                setWalk(walk - 18);
                if (walk - 18 === 70) {
                    alert("ITEM FOUNDED")
                }
            }

        }
    }

    return (
        <div className="w-full h-full overflow-scroll rounded " style={{ border: "10px dashed #470505", borderRight: "none" }} >
            <button
                className="flex relative flex-wrap w-full mx-auto border-2 border-slate-800  outline-none"
                onKeyDown={(ev) => handleWalk(ev)}
                autoFocus
            >
                <Block walk={walk} upRef={upRef} charImg={charImg} lastRef={lastRef}/>
                {/* <img className="z-0 absolute bottom-6 left-60" src={welcome} /> */}
            </button>
        </div>
    )
}