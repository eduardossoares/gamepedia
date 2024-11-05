import { motion } from "framer-motion";

import Image from "next/image";
import fifa25 from "../../../../public/maxresdefault.jpg"

interface CardProps {
    img: string;
    title: string;
    delay?: number;
}

export default function Card({ img, title, delay }: CardProps) {
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                transition: {
                    duration: 0.3,
                    delay: 0,
                },
            }}
            className="bg-black border border-zinc-700 py-3 px-3 rounded-md flex flex-col gap-y-2 break-words
            cursor-pointer will-change-transform">
            <Image className="border-zinc-700 border rounded-md" alt={title}
                src={fifa25}>
            </Image>
            {title}
        </motion.div>
    )
}