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
import express from "express";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const steam = new SteamAPI(process.env.STEAM_API);
// เกมแนะนำ
const featuredGames = steam
    .getFeaturedGames({
    currency: "th",
    language: "thai",
})
    .then((res) => res);
const SearchGame = (gameId) => {
    steam
        .getGameDetails(gameId, {
        currency: "th",
        language: "thai",
    })
        .then((res) => res);
};
app.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield featuredGames;
    res.json(data);
}));
app.get("/gameId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = req.body;
    const gameInfo = yield SearchGame(gameId);
    return res.json(gameInfo);
}));
app.listen(3001, () => {
    console.log("server run on localhost:3001");
});
