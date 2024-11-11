export const getGamesData = async () => {
  try {
    const res = await fetch("https://sujeitoprogramador.com/next-api/?api=games", {next: {revalidate: 60}});
    const json = await res.json();
    return json;
  }
  catch {
    throw new Error("Failed to compile fetch data!");
  }
}

export const getSearchedGame = async (game: string) => {
  try {
    const res = await fetch(`https://sujeitoprogramador.com/next-api/?api=game&title=${game}`);
    const json = await res.json();
    return json;
  }
  catch {
    return null
  }
}

export const getGameDetail = async (id: number | number) => {
  try {
    const res = await fetch(`https://sujeitoprogramador.com/next-api/?api=game&id=${id}`, {next: {
      revalidate: 60
    }});
    const json = res.json();
    return json;
  }
  catch {
    throw new Error("Failed to compile fetch data!");
  }
}