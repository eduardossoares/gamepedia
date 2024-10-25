import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.svg"

export default function Header() {
    return (
        <header className="w-full flex items-center 
        justify-between bg-black bg-opacity-30 border-b border-zinc-800 
        absolute top-0  py-4 px-4 sm:px-8">
            <Link href={"/"}>
                <Image alt="Gamepedia" src={logo} className="w-32" />
            </Link>
            <Link href={"/usuario/eu"}>
                <FaUserCircle color="white" size={32} />
            </Link>
        </header>
    )
}