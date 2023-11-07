import express from "express";
import { settingsDotEnvDb } from "./config/dotenv.config.js";
// import "./database/db.js";
import { routes } from "./routes/nodemailer.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/nodemailer", routes);

const PORT = settingsDotEnvDb().port;

app.listen(PORT, () => console.log(`Servidor en Puerto ${PORT}`));
