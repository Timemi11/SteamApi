var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    .then((res) => res);
// ค้นหาเกม
export const SearchGame = (gameId) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield steam.getGameDetails(gameId, {
        currency: "th",
        language: "thai",
    });
    return info;
});
export const allGame = steam.getAppList().then((res) => res);
