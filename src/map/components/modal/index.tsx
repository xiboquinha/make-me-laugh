interface IProps {
    setOpen: (v: boolean) => void;
    open: boolean;
}

export default function Modal({ setOpen, open }: IProps) {
    return open && (
        <div className="w-full h-full absolute flex items-center justify-center flex-col bg-black bg-opacity-50 z-[9999]">
            <div className="bg-red-900 w-3/6 h-5/6 rounded-lg shadow-2xl bg-yellow-900">
                <span
                    className="float-right mr-2 rounded-full text-white text-2xl"
                    onClick={() => setOpen(false)}>X</span>
                <div className="text-yellow-300 font-bold w-full px-3">
                    Titulo
                </div >
                <div className="bg-yellow-900 w-full h-min flex gap-3 p-2 flex-wrap items-start justify-center pt-10">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((it) =>(
                        <div className="bg-red-900 w-[80px] h-[80px] rounded-xl"></div>
                    ))}
                </div>
            </div>
        </div>
    )
}