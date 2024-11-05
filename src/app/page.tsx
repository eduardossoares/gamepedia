import { GameProps } from "@/utils/game";
import HomePage from "./components/HomePage";

import { getDailyGame } from "@/services/api";

export default async function Home() {
  const dailyGame: GameProps = await getDailyGame();
  return <HomePage dailyGame={dailyGame} />
}
