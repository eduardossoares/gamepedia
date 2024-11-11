import Link from "next/link"

export default function NotFound() {
    return (
        <div className="text-white text-center">
            <p className="text-zinc-300 font-light">Página Não Encontrada!</p>
            <Link href={"/"}>
                <button className="text-2xl font-semibold hover:scale-[1.05]
                duration-300">Retornar ao Menu</button>
            </Link>
        </div>
    )
}