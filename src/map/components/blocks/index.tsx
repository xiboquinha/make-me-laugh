import florBlue from "./../../../assets/map/constructions/flor-blue.png";
import chafaris from "./../../../assets/map/constructions/chafaris.gif";
import florRosa from "./../../../assets/map/textura/flor.png";
import house from "./../../../assets/map/constructions/house-1.png";
import house2 from "./../../../assets/map/constructions/house-2.png";
import house3 from "./../../../assets/map/constructions/house-3.png";
import house4 from "./../../../assets/map/constructions/house-4.png";
import house5 from "./../../../assets/map/constructions/mouse-5.png";
import house6 from "./../../../assets/map/constructions/house-6.png";
import tree from "./../../../assets/map/textura/tree.gif";
import tree2 from "./../../../assets/map/textura/tree2.png";
import tree3 from "./../../../assets/map/textura/tree.webp";
import gramaamarela from "./../../../assets/map/textura/pedras-amarelas.webp";
import pedraverde from "./../../../assets/map/textura/pedras-verde.webp";
import arbusto from "./../../../assets/map/textura/arbusto.png";
import dirt from "./../../../assets/map/textura/970ff5d0525d49ed86b19db932191c2c.webp";

import { data } from "./data";

interface IProps {
    walk: number;
    charImg: string;
    lastRef: any;
    upRef: any;
}

export default function Block({ walk, charImg, upRef, lastRef }: IProps) {
    const blocks = Array.from({ length: 648 }, (v, index) => {
        if (v) { console.log() }
        return index + 1
    });

    return blocks.map((v) => {
        if (v === walk) {
            return <div className={`${bgGame(v)} w-[65px] h-[65px]`}>
                <img className="w-full h-full z-999" src={charImg} />
            </div>;
        }
        else if (v === walk - 16) {
            return <div ref={upRef} className={`w-[65px] h-[65px] ${bgGame(walk - 16)}`}></div>
        }
        else if (v === walk + 16) {
            return <div ref={lastRef} className={`w-[65px] h-[65px] ${bgGame(walk + 16)}`}></div>
        }
        else if (data.chafaris.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={chafaris} />
        } else if ([].some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={florRosa} />
        } else if ([].some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={florBlue} />
        } else if (data.house.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={house} />
        } else if (data.house5.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={house5} />
        } else if (data.trees.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={tree} />
        } else if (data.arbusto.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={arbusto} />
        } else if (data.house2.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={house2} />
        } else if (data.house4.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={house4} />
        } else if (data.dirt.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={dirt} />
        } else if (data.house3.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={house3} />
        } else if (data.trees2.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={tree2} />
        } else if (data.trees.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={tree3} />
        } else if (data.house6.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={house6} />
        } else if (data.pedraamarela.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={gramaamarela} />
        } else if (data.pedraverde.some((p) => p === v)) {
            return <img className={`w-[65px] ${bgGame(v)}`} src={pedraverde} />
        } else {
            return <div className={"text-black text-[11px] " + bgGame(v)}>{v}</div>;
        }
    })
}


function bgGame(position: number) {
    if (data.sand.some((n) => position === n)) {
        // SAND
        return "send w-[65px] h-[65px]"
    } else if (data.rocks.some((n) => position === n)) {
        // ROCKS
        return "rocks w-[65px] h-[65px]"
    } else if (data.woots.some((n) => position === n)) {
        // WOODS
        return "woots w-[65px] h-[65px]"
    } else if (data.river.some((n) => position === n)) {
        return "river w-[65px] h-[65px]"
    } else if ([].some((n) => position === n)) {
        return "dirt w-[65px] h-[65px]"
    }
    else {
        return "grama w-[65px] h-[65px]"
    }
}