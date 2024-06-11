import express from "express";
import cors from "cors";
import SteamRoute from "./router/steam.route";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(SteamRoute);

app.listen(3001, () => {
  console.log("server run on localhost:3001");
});
