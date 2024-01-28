import { useState } from "react";
import Char from "../../char";

export default function One() {
  const blocks = Array.from({ length: 240 }, (v, index) => { 
   if(v){console.log()}
    return index+ 1});
  const [walk, setWalk] = useState(110);

  function handleWalk(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.keyCode === 39 || event.keyCode === 68) {
      if (walk + 1 < 241) setWalk(walk + 1);
    }
    if (event.keyCode === 37 || event.keyCode === 65) {
      if (walk - 1 > 0) setWalk(walk - 1);
    }
    if (event.keyCode === 40 || event.keyCode === 83) {
        if (walk + 20 < 241) setWalk(walk + 20);
    }
    if (event.keyCode === 38 || event.keyCode === 87) {
      if (walk - 12 > 0) setWalk(walk - 20);
    }
  }

  return (
    <div id="bg" className=" w-full h-screen overflow-auto p-10">
      <button
        autoFocus
        onKeyDown={(ev) => handleWalk(ev)}
        className="flex gap-1 flex-wrap w-[1200px] mx-auto p-10 border-2 border-slate-800  outline-none"
      >
        {blocks.map((v) => {
          if (v === walk) {
            return <Char />;
          } else {
            return <div className="w-[52px] h-[52px] bg-slate-600">{v}</div>;
          }
        })}
      </button>
    </div>
  );
}
