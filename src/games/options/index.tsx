import { useNavigate } from "react-router-dom";
import { options } from "./options";
import { ReactNode } from "react";

export default function Options() {
    const navigate = useNavigate();

    function chooseChar(char: string, img: ReactNode) {
        navigate("hub", { state: { id: char, img: img } })
    }
    return (
        <div className="w-full h-screen flex items-center justify-center bg-yellow-100">
            <div className="w-4/6 bg-black h-5/6 rounded shadow-md flex flex-wrap gap-5 p-2 items-center justify-center">
                {options.map((char) => (
                    <div onClick={() => chooseChar(char.id, char.img)} className="cursor-pointer relative rounded bg-yellow-600 w-[150px] h-[150px]">
                        <img src={char.img} className="w-full h-full rounded" />
                        <div
                            className="absolute bottom-3 w-full text-center hover:border border-blue-500 uppercase font-black">
                            {char.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}