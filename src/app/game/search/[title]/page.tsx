import { getSearchedGame } from "@/services/service";
import { GameProps } from "@/utils/game";

import SearchInput from "@/app/components/SearchInput";
import Card from "@/app/components/Card";

export default async function Page({
    params,
}: {
    params: Promise<{ title: string }>
}) {
    const games: GameProps[] = await getSearchedGame((await params).title);
    return (
        <div className="w-full max-w-7xl h-[calc(100vh-130px)] pt-8 space-y-8 px-4">
            <h1 className="text-xl font-semibold md:text-2xl text-white">
                Aqui estão os resultados da sua busca!
            </h1>
            <SearchInput isAnimated={false} />
            {!(await params).title || !games && (
                <p className="font-extralight text-zinc-200 max-sm:text-base text-center">
                    Nada encontrado, tente outro título!
                </p>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-8">
                {games && games.map((item) => (
                    <Card isAnimated={false} key={item.id} title={item.title} img={item.image_url} linkRef={`/${item.id}`} />
                ))}
            </div>
        </div>
    )
}