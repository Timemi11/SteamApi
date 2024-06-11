var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SearchGame, featuredGames } from "../model/steam.model";
export class SteamService {
    static getGameByAppId(appId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const gameData = yield SearchGame(appId);
            // แมปปิ้งข้อมูลก่อนส่งไปหน้าบ้านนน
            const gameInfo = {
                name: gameData.name,
                appid: gameData.steam_appid,
                image: gameData.header_image,
                price: {
                    formattedPrice: ((_a = gameData.price_overview) === null || _a === void 0 ? void 0 : _a.final_formatted) === undefined
                        ? "ฟรี"
                        : (_b = gameData.price_overview) === null || _b === void 0 ? void 0 : _b.final_formatted,
                },
            };
            return gameInfo;
        });
    }
    static getGameFeature() {
        return __awaiter(this, void 0, void 0, function* () {
            const gameData = yield featuredGames;
            return gameData;
        });
    }
}
