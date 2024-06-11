import SteamAPI from "steamapi";
import dotenv from "dotenv";
dotenv.config();

const steam = new SteamAPI(process.env.STEAM_API || "");

// เกมแนะนำ
export const featuredGames = steam
  .getFeaturedGames({
    currency: "th",
    language: "thai",
  })
  .then((res: any) => res);

// ค้นหาเกม
export const SearchGame = async (gameId: number) => {
  const info = await steam.getGameDetails(gameId, {
    currency: "th",
    language: "thai",
  });
  return info;
};

export const allGame = async () => {
  const info = await steam.getAppList();
  return info;
};
