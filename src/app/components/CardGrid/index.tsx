import Card from "../Card"
import { motion } from "framer-motion"

export default function CardGrid() {
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
            <Card delay={1.75} img="https://i.ytimg.com/vi/GcGJ4fe0iNk/maxresdefault.jpg" title="EA-Sports FC25" />
            <Card delay={1.75} img="https://i.ytimg.com/vi/GcGJ4fe0iNk/maxresdefault.jpg" title="EA-Sports FC25" />
            <Card delay={1.75} img="https://i.ytimg.com/vi/GcGJ4fe0iNk/maxresdefault.jpg" title="EA-Sports FC25" />
            <Card delay={1.75} img="https://i.ytimg.com/vi/GcGJ4fe0iNk/maxresdefault.jpg" title="EA-Sports FC25" />
        </motion.div>
    )
}