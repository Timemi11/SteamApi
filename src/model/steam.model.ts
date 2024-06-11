// import SteamAPI from "steamapi";
// import dotenv from "dotenv";
// dotenv.config();

// const steam = new SteamAPI("80631961452FFECB91BA8D6639E9B892");

// // เกมแนะนำ
// export const featuredGames = steam
//   .getFeaturedGames({
//     currency: "th",
//     language: "thai",
//   })
//   .then((res: any) => res);

// // ค้นหาเกม
// export const SearchGame = async (gameId: number) => {
//   const info = await steam.getGameDetails(gameId, {
//     currency: "th",
//     language: "thai",
//   });
//   return info;
// };

// export const allGame = steam.getAppList().then((res: any) => {
//   return res;
// });
