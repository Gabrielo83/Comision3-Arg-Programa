import mongoose from "mongoose";
import { settingsDotEnvDb } from "../config/dotenv.config.js";

const { localhost } = settingsDotEnvDb().db;

mongoose
  .connect(localhost)
  .then((db) => console.log("Base de Datos conectada"))
  .catch((err) => console.error("Error al conectar a la base de datos"));
