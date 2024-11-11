"use client"

import { motion } from "framer-motion"
import SearchInput from "../SearchInput"

import CardGrid from "../CardGrid"
import { GameProps } from "@/utils/game"

export default function HomePage({ gameData }: { gameData: GameProps[] }) {
    const framerMotionVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="text-white max-w-7xl w-full px-4 h-[calc(100vh-130px)]
        pt-8 space-y-8">
            <motion.h1
                className="text-xl font-semibold md:text-2xl"
                initial={framerMotionVariants.hidden}
                animate={framerMotionVariants.visible}
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                }}>
                Sua Fonte Completa de Descrições dos Melhores Games.
            </motion.h1>

            <SearchInput />

            <CardGrid gameData={gameData} />
        </div>
    )
}