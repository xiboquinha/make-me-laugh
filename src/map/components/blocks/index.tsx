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
import arbusto from "./../../../assets/map/textura/arbusto.png";
import girassol from "./../../../assets/map/textura/girassol.png"
import dirt from "./../../../assets/map/textura/970ff5d0525d49ed86b19db932191c2c.webp";

import { data } from "./data";
import { ReactNode } from "react";
import { images } from "./images";

interface IProps {
  walk: number;
  charImg: string;
  lastRef: React.MutableRefObject<HTMLDivElement | null>;
  upRef: React.MutableRefObject<HTMLDivElement | null>;
  bgGame: (position: number) => void;
  findImage: (position: number) => ReactNode;
}

export default function Block({
  walk,
  charImg,
  upRef,
  lastRef,
  bgGame,
  findImage,
}: IProps) {
  // const blocks = Array.from({ length: 648 }, (v, index) => {
  //   if (v) {
  //     console.log();
  //   }
  //   return index + 1;
  // });
  const blocks = Array.from({ length: 144 }, (v, index) => {
    if (v) {
      console.log();
    }
    return index + 1;
  });

  return blocks.map((v) => {
    if (v === walk) {
      return (
        <div className={`${bgGame(v)} w-[65px] h-[65px]`}>
          <img className="w-full h-full z-999" src={charImg} />
        </div>
      );
    } else if (v === walk - 18) {
      return (
        <div ref={upRef} className={`w-[65px] h-[65px] ${bgGame(walk - 18)}`}>
          {findImage(walk - 18)}
        </div>
      );
    } else if (v === walk + 18) {
      return (
        <div ref={lastRef} className={`w-[65px] h-[65px] ${bgGame(walk + 18)}`}>
          {findImage(walk + 18)}
        </div>
      );
    }
    else if (data.chafaris.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={chafaris} />;
    } else if ([].some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={florRosa} />;
    } else if (data.blueFlower.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={florBlue} />;
    } else if (data.girassol.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={girassol} />;
    } else if (data.house.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={house} />;
    } else if (data.house5.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={house5} />;
    } else if (data.trees4.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={images.tree4} />;
    } else if (data.trees.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={tree} />;
    } else if (data.arbusto.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={arbusto} />;
    } else if (data.house2.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={house2} />;
    } else if (data.house4.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={house4} />;
    } else if (data.dirt.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={dirt} />;
    } else if (data.house3.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={house3} />;
    } else if (data.trees2.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={tree2} />;
    } else if (data.trees3.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={tree3} />;
    } else if (data.house6.some((p) => p === v)) {
      return <img className={`w-[65px] ${bgGame(v)}`} src={house6} />;
    } else {
      return <div className={"text-black text-[11px] " + bgGame(v)}>{v}</div>;
    }
  });
}
