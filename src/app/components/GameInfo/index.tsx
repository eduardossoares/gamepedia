"use client"

import { motion } from "framer-motion";
import CardGrid from "../CardGrid";
import Tag from "../Tag";

export default function GameInfo() {
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
                    EA-SPORTS FC25
                </motion.p>

                <motion.div
                    initial={framerMotionVariants.hidden}
                    animate={framerMotionVariants.visible}
                    transition={{
                        duration: 0.5,
                        delay: 0.25,
                    }}
                    className={`w-full h-48 sm:h-96 bg-red-900 rounded-md
                    bg-[url("https://i.ytimg.com/vi/pBM2xyco_Kg/maxresdefault.jpg")] bg-center
                    bg-cover border border-zinc-700`}>
                    <div className="flex items-center gap-x-2 z-30 drop-shadow-2xl
                    max-w-48 sm:max-w-64">
                    </div>
                </motion.div>

                <motion.p
                    initial={framerMotionVariants.hidden}
                    animate={framerMotionVariants.visible}
                    transition={{
                        duration: 0.5,
                        delay: 0.50,
                    }}
                    className="max-sm:text-sm">
                    FIFA imita o esporte em sua essência. Os atletas podem chutar, trocar passes, realizar lançamentos,
                    cabecear, driblar e tudo o que o futebol oferece na vida real.
                    Os modos de jogo são diversos e os usuários podem optar por controlar times inteiros,
                    apenas um jogador e até mesmo seguir a carreira de treinador.
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
                <span>10/08/2024</span>
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
                    <Tag>Futebol</Tag>
                    <Tag>Multiplayer</Tag>
                </div>
            </motion.div>

            <motion.div
                initial={framerMotionVariants.hidden}
                animate={framerMotionVariants.visible}
                transition={{
                    duration: 0.5,
                    delay: 0.75,
                }}
                className="space-y-2">
                <p className="text-xl font-semibold">Plataformas</p>
                <div className="flex gap-x-2">
                    <Tag>PC</Tag>
                    <Tag>Playstation</Tag>
                    <Tag>X-box</Tag>
                </div>
            </motion.div>

            <CardGrid />
        </div>
    )
}