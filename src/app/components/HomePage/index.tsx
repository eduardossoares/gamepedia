"use client"

import { motion } from "framer-motion"
import SearchInput from "../SearchInput"

import { GameProps } from "@/utils/game"

import GameBanner from "../GameBanner"
import CardGrid from "../CardGrid"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"

export default function HomePage({ dailyGame }: { dailyGame: GameProps }) {
    const framerMotionVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="text-white max-w-7xl w-full px-4 h-[calc(100vh-130px)]
        pt-8 space-y-8">
            <motion.h1
                className="text-lg font-semibold md:text-2xl"
                initial={framerMotionVariants.hidden}
                animate={framerMotionVariants.visible}
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                }}>
                Sua Fonte Completa de Descrições dos Melhores Games.
            </motion.h1>

            <div className="flex flex-col gap-y-2">
                <motion.div className="flex"
                    initial={framerMotionVariants.hidden}
                    animate={framerMotionVariants.visible}
                    transition={{
                        duration: 0.5,
                        delay: 0.25,
                    }}>
                    <p className="text-lg sm:text-2xl">GAME OF THE DAY</p>
                    <MdOutlineKeyboardDoubleArrowRight className="text-2xl sm:text-4xl" />
                </motion.div>

                <GameBanner dailyGame={dailyGame} />
            </div>

            <SearchInput />

            <CardGrid />
        </div>
    )
}