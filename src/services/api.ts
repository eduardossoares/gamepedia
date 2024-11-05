export const getDailyGame = async () => {
    try {
        const res = await fetch(`https://sujeitoprogramador.com/next-api/?api=game_day`, {next: {revalidate: 86400}});
        const json = await res.json();
        return json;
    } catch {
        throw new Error("Failed to compile fetch data!");
    }
};