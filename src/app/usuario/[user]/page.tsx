import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal"

import { FaShareAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function Page() {
    return (
        <div className="w-full max-w-4xl">
            <Modal>
                <div className="w-48 h-48 bg-blue-700 rounded-full"></div>
                <div className="text-center">
                    <p className="text-2xl">Jefferson Kent</p>
                    <span className="text-zinc-400 font-light">Hi, my name is Jeff!</span>
                </div>
                <div className="flex gap-x-4 items-center">
                    <FaShareAlt className="text-2xl cursor-pointer" />
                    <IoMdSettings className="text-3xl cursor-pointer" />
                </div>
                <Button isWidthFull={true}>
                    Adicionar Jogo Favorito
                </Button>
            </Modal>
        </div>
    )
}