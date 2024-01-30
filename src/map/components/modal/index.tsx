import { images } from "../blocks/images";
import { useItem } from "./../../../GameProvider";

interface IProps {
  setOpen: (v: boolean) => void;
  open: boolean;
  type: 'question' | 'inventary'
}

export default function Modal({ setOpen, open, type }: IProps) {
  const { items, handleHappiness, happiness } = useItem();

  function handleContextMenu(event: React.MouseEvent, item: string) {
    event.preventDefault();
    if (item === "banana") {
      handleHappiness(happiness + 300);
      setOpen(false);
    } else if (item === "marreta") {
      handleHappiness(happiness - 100);
      setOpen(false);
    } else if (item === "cigarro") {
      handleHappiness(happiness - 100);
      setOpen(false);
    } else if (item === "muda") {
      handleHappiness(happiness + 300);
      setOpen(false);
    } else if (item === "casca") {
      handleHappiness(happiness - 500);
      setOpen(false);
    }
  }

  return (
    open && (
      <div className="w-full h-full absolute flex items-center justify-center flex-col bg-black bg-opacity-50 z-[9999]">
        {type === 'question' ?
          <div className=" w-[350px] h-auto rounded-lg shadow-2xl bg-yellow-900 p-2 ">
            <span
              className="cursor-pointer bg-yellow-500 float-right mr-2 rounded-full text-white text-2xl"
              onClick={() => setOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </span>
            <div className="text-yellow-300 font-bold w-full px-3">
              HELP
            </div>
            <div className="bg-yellow-900 font-bold text-gray-300 w-full h-min flex gap-3 flex-wrap items-start justify-center p-10 uppercase">
              The objetive of this game is make the monkey happy. Find items on the entire map, go to inventary and use them to try to make
              the monkey happy.
              <br />
              Good Luck :')
            </div>
          </div>
          : <div className=" w-2/6 h-[400px] rounded-lg shadow-2xl bg-yellow-900 p-2 relative">
            <span
              className="cursor-pointer bg-yellow-500 float-right mr-2 rounded-full text-white text-2xl"
              onClick={() => setOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </span>
            <div className="text-yellow-300 font-bold w-full px-3">
              INVENTARY
            </div>
            <div className="bg-yellow-900 w-full h-min flex gap-3 p-2 flex-wrap items-start justify-center ">
              {items &&
                items.map((it) => {
                  if (it === "banana") {
                    return (
                      <div
                        onContextMenu={(event) =>
                          handleContextMenu(event, "banana")
                        }
                        className="bg-yellow-700  cursor-pointer w-[80px] h-[80px] rounded-xl"
                      >
                        <img className="w-[65px] h-[65px]" src={images.banana} />
                        <div className="bg-red-700 text-center uppercase font-bold text-gray-200 rounded-b-xl">
                          {it}
                        </div>
                      </div>
                    );
                  } else if (it === "cigarro") {
                    return (
                      <div
                        onContextMenu={(event) =>
                          handleContextMenu(event, "cigarro")
                        }
                        className="bg-yellow-700 w-[80px] h-[80px] rounded-xl cursor-pointer"
                      >
                        <img className="w-[65px] h-[65px]" src={images.cigarro} />
                        <div className="bg-red-700 text-center uppercase font-bold text-gray-200 rounded-b-xl">
                          {it}
                        </div>
                      </div>
                    );
                  } else if (it === "marreta") {
                    return (
                      <div
                        onContextMenu={(event) =>
                          handleContextMenu(event, "marreta")
                        }
                        className="bg-yellow-700 w-[80px] h-[80px] rounded-xl cursor-pointer"
                      >
                        <img className="w-[65px] h-[65px]" src={images.marreta} />
                        <div className="bg-red-700 text-center uppercase font-bold text-gray-200 rounded-b-xl">
                          {it}
                        </div>
                      </div>
                    );
                  } else if (it === "muda") {
                    return (
                      <div
                        onContextMenu={(event) =>
                          handleContextMenu(event, "muda")
                        }
                        className="bg-yellow-700 w-[80px] h-[80px] rounded-xl cursor-pointer"
                      >
                        <img className="w-[65px] h-[65px]" src={images.muda} />
                        <div className="bg-red-700 text-center uppercase font-bold text-gray-200 rounded-b-xl">
                          {it}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        onContextMenu={(event) =>
                          handleContextMenu(event, "casca")
                        }
                        className="bg-yellow-700 w-[80px] h-[80px] rounded-xl cursor-pointer"
                      >
                        <img className="w-[65px] h-[65px]" src={images.casca} />
                        <div className="bg-red-700 text-center uppercase font-bold text-gray-200 rounded-b-xl">
                          {it}
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
            <div className="flex items-center justify-end p-2 uppercase absolute bottom-0 w-full right-1">
              <div className="max-w-[130px] shadow-lg rounded bg-yellow-400 text-yellow-900 p-2 text-[10px] font-bold">
                to use the item, click with right button of mouse</div>
            </div>
          </div>
        }
      </div>

    )
  );
}
