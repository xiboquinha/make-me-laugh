import { Dispatch, SetStateAction } from "react";

interface IProps{
    setStart : Dispatch<SetStateAction<boolean>>
}

export default function Initial({setStart}: IProps) {
  return (
    <div id="bg" className="flex items-center justify-center w-full h-screen">
      <button onClick={() => setStart(true)} className="w-96 hover:bg-orange-600 bg-black p-4 text-white rounded text-3xl border-2 border-white">
        START
      </button>
    </div>
  );
}
