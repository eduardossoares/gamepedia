import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { GameProps } from "@/utils/game";

export default function GameBanner({ dailyGame }: { dailyGame: GameProps }) {
    const framerMotionVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Link href={`/game/${dailyGame.id}`}>
            <motion.div
                initial={framerMotionVariants.hidden}
                animate={framerMotionVariants.visible}
                transition={{
                    duration: 0.5,
                    delay: 0.50,
                }}
                className={`w-full rounded-md px-8 flex relative
                border border-zinc-700 h-48 sm:h-96`}>

                <div className="bg-black w-full h-full z-50 absolute left-0
                rounded-md opacity-50 hover:opacity-80 duration-500"></div>

                <Image alt={dailyGame.title}
                    src={dailyGame.image_url}
                    fill={true}
                    quality={100}
                    className="object-cover rounded-md max-h-96 cursor-pointer"
                />
            </motion.div>
        </Link>
    );
}