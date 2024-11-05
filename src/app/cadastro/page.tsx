import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";

import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
    return (
        <div className="text-black max-w-3xl w-full md:px-4 flex flex-col
        items-center justify-center">
            <Modal>
                <strong className="text-2xl font-normal">Cadastro</strong>
                <div className="w-full space-y-4">
                    <Input type="text" placeholder="Nome" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Senha" />
                    <Button isWidthFull={true}>
                        Registrar
                        <FaArrowRight className="right-4 text-2xl absolute" />
                    </Button>
                </div>
                <p>
                    Já possui uma conta? {" "}
                    <Link href={"/login"} className="font-bold">
                        Faça seu login!
                    </Link>
                </p>
            </Modal>
        </div>
    )
}