import nodemailer from "nodemailer";
import { settingsMail } from "./dotenv.config.js";

const { user, pass } = settingsMail();

//Transporter

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
});

transporter
  .verify()
  .then(() => console.log("Transporter creado con éxito"))
  .catch((err) => console.log(err));
