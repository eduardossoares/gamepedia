"use client"

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../Button";
import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

export default function SearchInput() {
    const [inputValue, setInputValue] = useState<string>();
    const router = useRouter();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (!inputValue) return;
        router.push(`/game/search/${inputValue}`)
    }

    return (
        <motion.form onSubmit={handleSearch}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.5,
                delay: 0.75
            }}
            className="bg-white flex items-center w-full
            mx-auto rounded-md p-1 justify-between gap-x-2">
            <input className="px-2 outline-none text-black w-full max-sm:text-sm" onChange={(e) =>
                setInputValue(e.target.value)
            } value={inputValue}
                type="text" placeholder="Procurando algum jogo em específico?" />
            <Button>
                Buscar
                <FaArrowRight size={22}
                    className="right-4 text-2xl absolute hidden sm:block" />
            </Button>
        </motion.form>
    )
}