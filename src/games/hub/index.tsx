import { useLocation, useNavigate } from "react-router-dom";
import pensive from "./../../assets/chars/pensive.png";
import Map from "../../map/map";
import inventary from "./../../assets/components/inventary.png";
import pause from "./../../assets/components/pause.png";
import audioBg from "./../../assets/audio/Pixel Tunes (Royalty Free Game Music Pack).mp3";
import menu from "./../../assets/components/menu.png";
import resume from "./../../assets/components/resume.png";
import soundOn from "./../../assets/components/sound.png";
import question from "./../../assets/components/question.png";
import soundOff from "./../../assets/components//sound-off.png";
import ballon from "./../../assets/components/balloon.png";
import happy from "./../../assets/components/happy.png";
import normal from "./../../assets/components/normal.png";

import { useEffect, useState } from "react";
import Modal from "../../map/components/modal";
import { useItem } from "../../GameProvider";

export default function Hub() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'question' | 'inventary'>('question');
  const location = useLocation();
  const navigate = useNavigate();
  const talk = ["I'M SO ANGRY AARRHHHGGHH", 'GIVE ME SOMETHING NOOOWWW', 'I CANT HANDLE IT ANYMOREEE AGHHTHT'];
  const [currentDivIndex, setCurrentDivIndex] = useState(0);
  const { items, happiness, handleHappiness, addItem } = useItem();

  const [isPlaying, setIsPlaying] = useState(false);
  const [mute, setMute] = useState(false);

  const togglePlay = () => {
    toggleMute();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = document.getElementById("audioPlayer") as HTMLAudioElement;

    if (audio) {
      if (mute) {
        audio.pause();
      } else {
        audio.play();
      }

      setMute(!mute);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Verifica se chegou ao final do array, reinicia se necessário
      if (currentDivIndex === talk.length - 1) {
        setCurrentDivIndex(0);
      } else {
        // Avança para o próximo índice
        setCurrentDivIndex(currentDivIndex + 1);
      }
    }, 3000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [currentDivIndex, talk]);

  useEffect(() => {
    if (happiness < 0) {
      alert("you loose");
      handleHappiness(0);
      addItem("", true);
      navigate("/");
    }
  }, [happiness]);

  return (
    <div className="w-full h-screen flex items-center flex-col bg-yellow-700">
      {/* <div className="text-6xl font-black text-white">FAÇA O MACACO RIR !!</div> */}
      <div className="w-full h-full flex items-center justify-center">
        <div
          style={{ border: "10px dashed #470505" }}
          className="w-full h-full flex rounded bg-yellow-900"
        >
          <div className="relative text-sm text-gray-100 w-5/6 rounded-lg">
            <audio className="hidden" id="audioPlayer" controls>
              <source src={audioBg} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            {!isPlaying ? (
              <div className="mx-auto w- h-full flex items-center justify-center">
                <button
                  className={"bg-blue-400 w-3/12 rounded-lg p-4"}
                  onClick={() => togglePlay()}
                >
                  START
                </button>
              </div>
            ) : (
              <Map />
            )}

          </div>
          <div className="w-2/5 flex items-end justify-end overflow-hidden rounded-lg">
            {/* <img className={"w-[65%] mx-auto"} src={talk}/> */}
            <span className="left-[-6px] flex gap-3 h-full w-full pt-2">
              <img
                onClick={() => { setOpen(true); setType('inventary') }}
                className="w-[50px] h-[50px] rounded  cursor-pointer hover:bg-yellow-400"
                src={menu}
              />
              <img
                onClick={() => {
                  setIsPlaying(false);
                  togglePlay();
                }}
                className="w-[50px]  h-[50px] rounded cursor-pointer hover:bg-yellow-400"
                src={isPlaying ? pause : resume}
              />
              <span className="relative ">
                {items.length > 0 && (
                  <span className="absolute right-[-8px] bg-red-700 text-white rounded-full w-5 top-[-6px] flex font-bold h-5 items-center justify-center">
                    {items.length}
                  </span>
                )}
                <img
                  onClick={() => { setOpen(true); setType('inventary') }}
                  className="w-[50px]  h-[50px] rounded cursor-pointer hover:bg-yellow-400"
                  src={inventary}
                />
              </span>
              <img
                onClick={() => toggleMute()}
                className="w-[50px] h-[50px] rounded cursor-pointer hover:bg-yellow-400"
                src={mute ? soundOn : soundOff}
              />
              <img
                onClick={() => { setOpen(true); setType('question') }}
                className="w-[50px] h-[50px] rounded cursor-pointer hover:bg-yellow-400"
                src={question}
              />
            </span>
            <div className="w-[450px]">
              <div className="w-full h-[200px] mb-2 relative">
                <img
                  className="rounded-lg h-auto absolute"
                  src={ballon}
                />
                <div className="absolute p-5 font-bold text-[12px] text-wrap w-[165px] text-center">
                  {talk[currentDivIndex]}
                </div>
              </div>
              <img
                className="rounded-lg animate-bounce w-[200px] h-auto ml-10"
                src={location.state.img}
              />
            </div>
          </div>
          <div className="w-1/12 flex items-center flex-col justify-center">
            {happiness}
            <img
              className="w-5/6"
              src={happiness >= 300 && happiness <= 500 ? normal : happiness >= 500 ? happy : pensive}
            />
            <div
              style={{ border: "3px solid rgb(180 83 9)" }}
              className="h-[70%] relative w-4/6 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 overflow-hidden"
            >
              <div
                style={{ bottom: `${happiness}px` }}
                className="w-full h-full bg-red-900  absolute"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Modal type={type} setOpen={setOpen} open={open} />
    </div>
  );
}