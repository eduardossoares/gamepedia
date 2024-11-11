"use client"

import { motion } from "framer-motion";
import Tag from "../Tag";
import { GameProps } from "@/utils/game";

import Image from "next/image";

export default function GameInfo({ game }: { game: GameProps }) {

    const framerMotionVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="text-white max-w-7xl w-full h-[calc(100vh-130px)] py-10 space-y-8 px-4">
            <div className="space-y-4">
                <motion.p
                    initial={framerMotionVariants.hidden}
                    animate={framerMotionVariants.visible}
                    transition={{
                        duration: 0.5,
                        delay: 0.25,
                    }}
                    className="text-xl">
                    {game.title}
                </motion.p>

                <motion.div
                    initial={framerMotionVariants.hidden}
                    animate={framerMotionVariants.visible}
                    transition={{
                        duration: 0.5,
                        delay: 0.25,
                    }} className="relative max-lg:h-48 h-[460px]">
                    <Image alt={game.title} src={game.image_url} quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                        fill={true} className="border-zinc-700 border rounded-md object-cover" />
                </motion.div>

                <motion.p
                    initial={framerMotionVariants.hidden}
                    animate={framerMotionVariants.visible}
                    transition={{
                        duration: 0.5,
                        delay: 0.50,
                    }}
                    className="max-sm:text-sm">
                    {game.description}
                </motion.p>

            </div>

            <motion.div
                initial={framerMotionVariants.hidden}
                animate={framerMotionVariants.visible}
                transition={{
                    duration: 0.5,
                    delay: 0.50,
                }}>
                <p className="font-semibold text-xl">Data de Lançamento</p>
                <span>{game.release}</span>
            </motion.div>

            <motion.div
                initial={framerMotionVariants.hidden}
                animate={framerMotionVariants.visible}
                transition={{
                    duration: 0.5,
                    delay: 0.75,
                }} className="space-y-2">
                <p className="text-xl font-semibold">Categorias</p>
                <div className="flex gap-x-2">
                    {game.categories.map((item, index) => (
                        <Tag key={index}>{item}</Tag>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={framerMotionVariants.hidden}
                animate={framerMotionVariants.visible}
                transition={{
                    duration: 0.5,
                    delay: 0.75,
                }}
                className="space-y-2 pb-8">
                <p className="text-xl font-semibold">Plataformas</p>
                <div className="flex gap-x-2">
                    {game.platforms.map((item, index) => (
                        <Tag key={index}>{item}</Tag>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}