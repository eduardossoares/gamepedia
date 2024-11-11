import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal"

import { FaShareAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function Page() {
    return (
        <div className="w-full max-w-4xl sm:px-4">
            <Modal isProfileModal={true}>
                <div className="flex flex-col w-full gap-y-8 gap-x-10 sm:relative pt-8">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 bg-blue-700 rounded-full mx-auto"></div>
                    <div className="text-center">
                        <p className="text-2xl">Jefferson Kent</p>
                        <span className="text-zinc-400 font-light">Hi, my name is Jeff!</span>
                    </div>
                    <div className="flex gap-x-4 items-center mx-auto sm:absolute sm:right-0 sm:top-0">
                        <FaShareAlt className="text-2xl cursor-pointer" />
                        <IoMdSettings className="text-3xl cursor-pointer" />
                    </div>
                </div>
                <Button isWidthFull={true}>
                    Adicionar Jogo Favorito
                </Button>
            </Modal>
        </div>
    )
}