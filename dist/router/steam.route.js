import { Router } from "express";
import { SteamController } from "../controller/steam.controller";
const router = Router();
router.get("/", SteamController.getGameFeatures);
router.get("/:appid", SteamController.getGameById);
// router.get("/all", SteamController.getGameAll);
export default router;
