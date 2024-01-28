import { useNavigate } from "react-router-dom";
import { options } from "./options";
import { ReactNode } from "react";

export default function Options() {
  const navigate = useNavigate();

  function chooseChar(char: string, img: ReactNode) {
    navigate("hub", { state: { id: char, img: img } });
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-yellow-100">
      <div className="w-4/6 h-5/6 rounded flex-col flex flex-wrap gap-5 p-2 items-center justify-center">
        <div className="text-2xl font-black">SELECT </div>
        {options.map((char) => (
          <div
            onClick={() => chooseChar(char.id, char.img)}
            className="hover:w-[160px] hover:h-[160px] cursor-pointer rounded-t-lg relative bg-yellow-600 w-[150px] h-[150px]"
          >
            <img src={char.img} className="w-full h-full rounded" />
            <div className="absolute bg-yellow-900 w-full text-gray-200 text-center rounded-b-lg hover:border border-blue-500 uppercase font-black">
              {char.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
