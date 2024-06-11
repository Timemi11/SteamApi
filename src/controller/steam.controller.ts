// import { Request, Response } from "express";
// import { SteamService } from "../services/steam.service";

// export class SteamController {
//   static async getGameById(req: Request, res: Response) {
//     const appId = Number(req.params.appid);
//     const info = await SteamService.getGameByAppId(appId);
//     return res.json(info);
//   }
//   static async getGameFeatures(req: Request, res: Response) {
//     const info = await SteamService.getGameFeature();
//     return res.json(info);
//   }
// static async getGameAll(req: Request, res: Response) {
//   const info = await SteamService.getGameAll();
//   return res.json(info);
// }
// }
