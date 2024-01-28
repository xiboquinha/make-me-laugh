import { useLocation } from "react-router-dom"
import pensive from "./../../assets/chars/pensive.png";
import Map from "../../map/map";
import inventary from "./../../assets/components/inventary.png";
import pause from "./../../assets/components/pause.png";
import audioBg from "./../../assets/audio/Pixel Tunes (Royalty Free Game Music Pack).mp3";
import menu from "./../../assets/components/menu.png";
import resume from "./../../assets/components/resume.png";
import soundOn from "./../../assets/components/sound.png";
import soundOff from "./../../assets/components//sound-off.png";

import { useState } from "react";
import Modal from "../../map/components/modal";

export default function Hub() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const [isPlaying, setIsPlaying] = useState(false);
    const [mute, setMute] = useState(false);

    const togglePlay = () => {
        toggleMute()
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        const audio = document.getElementById('audioPlayer') as HTMLAudioElement;

        if (audio) {
            if (mute) {
                audio.pause();
            } else {
                audio.play();
            }

            setMute(!mute);
        }
    };

    return (
        <div className="w-full h-screen flex items-center flex-col hub-bg">
            {/* <div className="text-6xl font-black text-white">FAÇA O MACACO RIR !!</div> */}
            <div className="w-[1500px] mt-28 h-[540px] flex items-center justify-center">
                <div className="max-w-[1500px] min-w-[1200px] h-full flex rounded">
                    <div className="relative text-sm text-gray-100 w-5/6 rounded-lg">
                        <audio className="hidden" id="audioPlayer" controls>
                            <source src={audioBg} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                        {!isPlaying ?
                            <div className="mx-auto w- h-5/6 flex items-center justify-center">
                                <button className={"bg-blue-400 w-3/12 rounded-lg p-4"} onClick={() => togglePlay()}>
                                    START
                                </button>
                            </div> :
                            <Map />
                        }
                        <span className="left-[-6px] absolute top-[-60px] z-[9999] flex gap-3" >
                            <img onClick={() => setOpen(true)} className="w-[50px] rounded  cursor-pointer hover:bg-yellow-400" src={menu} />
                            <img onClick={() => {
                                setIsPlaying(false);
                                togglePlay()
                            }} className="w-[50px] rounded cursor-pointer hover:bg-yellow-400" src={isPlaying ? pause : resume} />
                            <span className="relative ">
                                <span className="absolute right-[-8px] rounded-full w-5 top-[-6px] flex font-bold h-5 items-center justify-center">1</span>
                                <img onClick={() => setOpen(true)} className="w-[50px]  rounded cursor-pointer hover:bg-yellow-400" src={inventary} />
                            </span>
                            <img onClick={() => toggleMute()} className="w-[50px] rounded cursor-pointer hover:bg-yellow-400" src={mute ? soundOn : soundOff} />
                        </span>
                    </div>
                    <div className="flex-col max-w-[350px] flex items-end justify-end overflow-hidden rounded-lg">
                        {/* <img className={"w-[65%] mx-auto"} src={talk}/> */}
                        <img className="rounded-lg animate-bounce w-[200px] h-auto"
                            src={location.state.img} />
                    </div>
                    <div className="w-1/12 flex items-center justify-center">
                        <div style={{ border: '3px solid rgb(180 83 9)' }}
                            className="h-[90%] w-5/6 rounded-full relative">
                            <img className=" absolute bottom-0" src={pensive} />
                        </div>
                    </div>
                </div>
            </div>
            <Modal setOpen={setOpen} open={open} />
        </div>
    )
}