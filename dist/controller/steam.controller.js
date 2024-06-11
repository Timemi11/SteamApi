var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SteamService } from "../services/steam.service";
export class SteamController {
    static getGameById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const appId = Number(req.params.appid);
            const Info = yield SteamService.getGameByAppId(appId);
            return res.json(Info);
        });
    }
    static getGameFeatures(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Info = yield SteamService.getGameFeature();
            return res.json(Info);
        });
    }
    static getGameAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Info = yield SteamService.getGameAll();
            return res.json(Info);
        });
    }
}
