import { GameProps } from "@/utils/game"
import Card from "../Card"
import { motion } from "framer-motion"

export default function CardGrid({ gameData = [] }: { gameData: GameProps[] }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.5,
                delay: 1,
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-8">
            {gameData.map((item) => (
                <Card key={item.id} img={item.image_url} title={item.title} linkRef={item.id} />
            ))}
        </motion.div>
    )
}