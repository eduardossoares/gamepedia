import HomePage from "./components/HomePage";

import { GameProps } from "@/utils/game";
import { getGamesData } from "@/services/service";

export default async function Home() {
  const gamesData: GameProps[] = await getGamesData();
  return <HomePage gameData={gamesData} />
}
