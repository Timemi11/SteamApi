var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from "cors";
import SteamAPI from "steamapi";
import dotenv from "dotenv";
dotenv.config();
const steam = new SteamAPI("80631961452FFECB91BA8D6639E9B892");
const app = express();
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(SteamRoute);
const featuredGames = steam
    .getFeaturedGames({
    currency: "th",
    language: "thai",
})
    .then((res) => res);
const SearchGame = (gameId) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield steam.getGameDetails(gameId, {
        currency: "th",
        language: "thai",
    });
    return info;
});
app.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield featuredGames;
    return res.json(data);
}));
app.get("/:appId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const appId = Number(req.params.appId);
    const gameData = yield SearchGame(appId);
    const gameInfo = {
        name: gameData.name,
        appId: gameData.steam_appid,
        image: gameData.header_image,
        price: {
            formattedPrice: ((_a = gameData.price_overview) === null || _a === void 0 ? void 0 : _a.final_formatted) === undefined
                ? "ฟรี"
                : (_b = gameData.price_overview) === null || _b === void 0 ? void 0 : _b.final_formatted,
        },
    };
    return res.json(gameInfo);
}));
app.listen(3001, () => {
    console.log("server run on localhost:3001");
});
