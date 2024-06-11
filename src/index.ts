import express from "express";
import cors from "cors";
// import SteamRoute from "./router/steam.route";
import { Request, Response } from "express";
import SteamAPI from "steamapi";
import dotenv from "dotenv";
import { MapInfo } from "./dto/items.dto";
dotenv.config();

const steam = new SteamAPI("80631961452FFECB91BA8D6639E9B892");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(SteamRoute);

const featuredGames = steam
  .getFeaturedGames({
    currency: "th",
    language: "thai",
  })
  .then((res) => res);

const SearchGame = async (gameId: number) => {
  const info = await steam.getGameDetails(gameId, {
    currency: "th",
    language: "thai",
  });
  return info;
};

app.get("/", async (_req: Request, res: Response) => {
  const data = await featuredGames;
  return res.json(data);
});

app.get("/:appId", async (req: Request, res: Response) => {
  const appId = Number(req.params.appId);
  const gameData = await SearchGame(appId);

  const gameInfo: MapInfo = {
    name: gameData.name,
    appid: gameData.steam_appid,
    image: gameData.header_image,
    price: {
      formattedPrice:
        gameData.price_overview?.final_formatted === undefined
          ? "ฟรี"
          : gameData.price_overview?.final_formatted,
    },
  };
  return res.json(gameInfo);
});

app.listen(3001, () => {
  console.log("server run on localhost:3001");
});
