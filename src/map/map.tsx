import { useRef, useState } from "react";
import walk1 from "./../assets/chars/mokey-walk-1.png";
import as from "./../assets/chars/walking-right.png";
import down from "./../assets/chars/walk-down.png";
import "./index.css";
import left from "./../assets/chars/walk-left.png";
import Block from "./components/blocks";
import { data } from "./components/blocks/data";
import { images } from "./components/blocks/images";

export default function Map() {
  const lastRef = useRef<null | HTMLDivElement>(null);
  const upRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = (direction: "up" | "down") => {
    if (direction == "up") {
      upRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      lastRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (upRef.current) {
        upRef.current.scrollBy(0, +100);
      }
    }
  };

  const [charImg, setCharImg] = useState(walk1);
  const [walk, setWalk] = useState(119);

  function bgGame(position: number) {
    if (data.sand.some((n) => position === n)) {
      return "send w-[65px] h-[65px]";
    } else if (data.rocks.some((n) => position === n)) {
      return "rocks w-[65px] h-[65px]";
    } else if (data.darkWood.some((n) => position === n)) {
      return "dark-wood w-[65px] h-[65px]";
    } else if (data.pedraverde.some((n) => position === n)) {
      return "pedra-verde w-[65px] h-[65px]";
    } else if (data.woots.some((n) => position === n)) {
      return "woots w-[65px] h-[65px]";
    } else if (data.pedraamarela.some((n) => position === n)) {
      return "pedra-amarelo w-[65px] h-[65px]";
    } else if (data.river.some((n) => position === n)) {
      return "river w-[65px] h-[65px]";
    } else if (data.dirt.some((n) => position === n)) {
      return "dirt w-[65px] h-[65px]";
    } else {
      return "grama w-[65px] h-[65px]";
    }
  }

  function findImage(position: number) {
    if (data.chafaris.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.chafaris} />
      );
    } else if ([].some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.florRosa} />
      );
    } else if (data.blueFlower.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.florBlue} />
      );
    } else if (data.house.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.house} />
      );
    } else if (data.gato.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.gato} />
      );
    } else if (data.galinha.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.galinha} />
      );
    } else if (data.coala.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.coala} />
      );
    } else if (data.trees4.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.tree4} />
      );
    } else if (data.house5.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.house5} />
      );
    } else if (data.trees.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.tree} />
      );
    } else if (data.arbusto.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.arbusto} />
      );
    } else if (data.house2.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.house2} />
      );
    
    } else if (data.house4.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.house4} />
      );
    } else if (data.dirt.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.dirt} />
      );
    } else if (data.house3.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.house3} />
      );
    } else if (data.trees2.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.tree2} />
      );
    } else if (data.trees3.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.tree3} />
      );
    } else if (data.house6.some((p) => p === position)) {
      return (
        <img className={`w-[65px] ${bgGame(position)}`} src={images.house6} />
      );
    } else if (data.pedraamarela.some((p) => p === position)) {
      return (
        <img
          className={`w-[65px] ${bgGame(position)}`}
          src={images.gramaamarela}
        />
      );
    } else if (data.pedraverde.some((p) => p === position)) {
      return (
        <img
          className={`w-[65px] ${bgGame(position)}`}
          src={images.pedraverde}
        />
      );
    } else {
      return null;
    }
  }

  function handleChar(direction: "left" | "up" | "down" | "right") {
    switch (direction) {
      case "left":
        setCharImg(left);
        break;
      case "down":
        setCharImg(down);
        break;
      case "right":
        setCharImg(as);
        break;
      default:
        setCharImg(walk1);
        break;
    }
  }

  function handleWalk(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.keyCode === 39 || event.keyCode === 68) {
      // right
      console.log(findImage(walk + 1))
      if (walk + 1 < 644 && findImage(walk + 1) == null) {
        handleChar("right");
        setWalk(walk + 1);
        if (walk + 1 === 70) {
          alert("ITEM FOUNDED");
        }
      }
    }
    if (event.keyCode === 37 || event.keyCode === 65) {
      //left
      handleChar("left");
      if (walk - 1 > 0 && findImage(walk - 1) == null) {
        setWalk(walk - 1);
        if (walk - 1 === 70) {
          alert("ITEM FOUNDED");
        }
      }
    }
    if (event.keyCode === 40 || event.keyCode === 83) {
      //down
      handleChar("down");
      if (walk + 18 < 644 && findImage(walk + 18) == null) {
        scrollToBottom("down");
        setWalk(walk + 18);
        if (walk + 18 === 70) {
          alert("ITEM FOUNDED");
        }
      }
    }
    if (event.keyCode === 38 || event.keyCode === 87) {
      //up
      handleChar("up");
      if (walk - 18 > 0 && findImage(walk -18) == null) {
        scrollToBottom("up");
        setWalk(walk - 18);
        if (walk - 18 === 70) {
          alert("ITEM FOUNDED");
        }
      }
    }
  }

  return (
    <div
      className="w-full h-full overflow-scroll rounded "
    >
      <button
        className="flex relative h-full flex-wrap w-full mx-auto border-2 border-slate-800  outline-none"
        onKeyDown={(ev) => handleWalk(ev)}
        autoFocus
      >
        <Block
          bgGame={bgGame}
          findImage={findImage}
          walk={walk}
          upRef={upRef}
          charImg={charImg}
          lastRef={lastRef}
        />
      </button>
    </div>
  );
}
