import { Metadata } from "next";

import GameInfo from "@/app/components/GameInfo";
import { getGameDetail } from "@/services/service";
import { GameProps } from "@/utils/game";

import { redirect } from "next/navigation";

export async function generateMetadata({ params }:
    { params: Promise<{ id: number }> }
): Promise<Metadata> {

    const game: GameProps = await getGameDetail((await params).id);

    const metadata: Metadata = {
        title: `Gamepedia - ${game.title}`,
        description: `${game.description.slice(0, 100)}...`,
        openGraph: {
            images: [
                game.image_url,
            ],
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
            }
        }
    };

    return metadata;
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const game: GameProps = await getGameDetail((await params).id);
    if (!game) redirect("/")
    return <GameInfo game={game} />
}