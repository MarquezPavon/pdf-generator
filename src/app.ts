import express from "express";
import apiRouter from "./api/index";

const app = express();

app.use(express.json());

app.use("/api", apiRouter());

app.listen(4000, () => console.log("Listening on port: 4000"));
