import { Request, Response } from "express";
import { SteamService } from "../services/steam.service";

export class SteamController {
  static async getGameById(req: Request, res: Response) {
    const appId = Number(req.params.appid);
    const Info = await SteamService.getGameByAppId(appId);
    return res.json(Info);
  }
  static async getGameFeatures(req: Request, res: Response) {
    const Info = await SteamService.getGameFeature();
    return res.json(Info);
  }
  static async getGameAll(req: Request, res: Response) {
    const Info = await SteamService.getGameAll();
    return res.json(Info);
  }
}
