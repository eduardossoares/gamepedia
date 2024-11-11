import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
    img: string;
    title: string;
    linkRef: number | string;
    isAnimated?: boolean;
}

export default function Card({ img, title, linkRef, isAnimated = true }: CardProps) {
    if (!isAnimated) return (
        <Link href={`/game/${linkRef}`}>
            <div
                className="bg-black border border-zinc-700 py-3 px-3 rounded-md flex flex-col gap-y-2 break-words
                cursor-pointer will-change-transform w-full">
                <div className="relative max-lg:h-48 h-40">
                    <Image className="border-zinc-700 border rounded-md object-cover" alt={title}
                        fill={true}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                        src={img} />
                </div>
                <p className="truncate text-white">
                    {title}
                </p>
            </div >
        </Link>
    )

    return (
        <Link href={`/game/${linkRef}`}>
            <motion.div
                whileHover={{
                    scale: 1.02,
                    transition: {
                        duration: 0.3,
                        delay: 0,
                    },
                }}
                className="bg-black border border-zinc-700 py-3 px-3 rounded-md flex flex-col gap-y-2 break-words
            cursor-pointer will-change-transform w-full">
                <div className="relative max-lg:h-48 h-40">
                    <Image className="border-zinc-700 border rounded-md object-cover" alt={title}
                        fill={true}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                        src={img} />
                </div>
                <p className="truncate">
                    {title}
                </p>
            </motion.div >
        </Link>
    )
}