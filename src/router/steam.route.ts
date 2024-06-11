import { Router } from "express";
import { SteamController } from "../controller/steam.controller";

const router = Router();

router.get("/steam", SteamController.getGameFeatures);
router.get("/steam/:appid", SteamController.getGameById);
router.get("/steam/all", SteamController.getGameAll);

export default router;
