import SteamAPI, { Game } from "steamapi";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const steam = new SteamAPI(process.env.STEAM_API as string);

// เกมแนะนำ
const featuredGames = steam
  .getFeaturedGames({
    currency: "th",
    language: "thai",
  })
  .then((res: any) => res);

// ค้นหาเกม
const SearchGame = async (gameId: number) => {
  const info = await steam.getGameDetails(gameId, {
    currency: "th",
    language: "thai",
  });
  return info;
};

const allGame = async () => {
  const info = await steam.getAppList();
  return info;
};

// เกมแนะนำ
app.get("/", async (_req: Request, res: Response) => {
  const data = await featuredGames;
  res.json(data);
});
// ค้นหาเกม
app.get("/gameId", async (req: Request, res: Response) => {
  const { appId } = req.body;
  const gameInfo = await SearchGame(appId);
  return res.json(gameInfo);
});
// all
app.get("/all", async (req: Request, res: Response) => {
  const all = await allGame();
  return res.json(all);
});

app.listen(3001, () => {
  console.log("server run on localhost:3001");
});
