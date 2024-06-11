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

const SearchGame = (gameId: number) => {
  steam
    .getGameDetails(gameId, {
      currency: "th",
      language: "thai",
    })
    .then((res: any) => res);
};

app.get("/", async (_req: Request, res: Response) => {
  const data = await featuredGames;
  res.json(data);
});

app.get("/gameId", async (req: Request, res: Response) => {
  const gameId = req.body;
  const gameInfo = await SearchGame(gameId);
  return res.json(gameInfo);
});

app.listen(3001, () => {
  console.log("server run on localhost:3001");
});
