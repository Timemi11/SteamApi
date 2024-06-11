// import { MapInfo } from "../dto/items.dto";
// import { SearchGame, featuredGames } from "../model/steam.model";

// export class SteamService {
//   static async getGameByAppId(appId: number) {
//     const gameData = await SearchGame(appId);
//     // แมปปิ้งข้อมูลก่อนส่งไปหน้าบ้านนน
//     const gameInfo: MapInfo = {
//       name: gameData.name,
//       appid: gameData.steam_appid,
//       image: gameData.header_image,
//       price: {
//         formattedPrice:
//           gameData.price_overview?.final_formatted === undefined
//             ? "ฟรี"
//             : gameData.price_overview?.final_formatted,
//       },
//     };
//     return gameInfo;
//   }
//   static async getGameFeature() {
//     const gameData = await featuredGames;
//     return gameData;
//   }

//   //  ใช้ไม่ได้ ติด large payload
//   // static async getGameAll() {
//   //   const all = await allGame;
//   //   return all;
//   // }
// }
