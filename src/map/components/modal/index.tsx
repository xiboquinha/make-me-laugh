import { images } from "../blocks/images";
import { useItem } from "./../../../GameProvider";

interface IProps {
  setOpen: (v: boolean) => void;
  open: boolean;
}

export default function Modal({ setOpen, open }: IProps) {
  const { items } = useItem();

  return (
    open && (
      <div className="w-full h-full absolute flex items-center justify-center flex-col bg-black bg-opacity-50 z-[9999]">
        <div className=" w-3/6 h-5/6 rounded-lg shadow-2xl bg-yellow-900">
          <span
            className="cursor-pointer bg-yellow-500 float-right mr-2 rounded-full text-white text-2xl"
            onClick={() => setOpen(false)}
          >
            X
          </span>
          <div className="text-yellow-300 font-bold w-full px-3">Titulo</div>
          <div className="bg-yellow-900 w-full h-min flex gap-3 p-2 flex-wrap items-start justify-center pt-10">
            {items &&
              items.map((it) => {
                if (it === "banana") {
                  return (
                    <div className="bg-yellow-700 w-[80px] h-[80px] rounded-xl">
                      <img src={images.banana} /> {it}
                    </div>
                  );
                } else if (it === "cigarro") {
                  return (
                    <div className="bg-yellow-700 w-[80px] h-[80px] rounded-xl">
                      <img src={images.cigarro} />
                      {it}
                    </div>
                  );
                } else if (it === "marreta") {
                  return (
                    <div className="bg-yellow-700 w-[80px] h-[80px] rounded-xl">
                      <img src={images.marreta} />
                      {it}
                    </div>
                  );
                } else if (it === "muda") {
                  return (
                    <div className="bg-yellow-700 w-[80px] h-[80px] rounded-xl">
                      <img src={images.muda} />
                      {it}
                    </div>
                  );
                } else {
                  return (
                    <div className="bg-yellow-700 w-[80px] h-[80px] rounded-xl">
                      <img src={images.casca} />
                      {it}
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    )
  );
}
