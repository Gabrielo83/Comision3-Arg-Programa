import { Router } from "express";
import { transporter } from "../config/nodemailer.js";

export const routes = Router();

routes.post("/", async (req, res) => {
  const { mail, name } = req.body;

  await transporter.sendMail({
    from: "mensaje enviado por <gcaamano83@gmail.com>",
    to: mail,
    subject: "Mensaje de Gabriel Caamaño",
    html: `

    <h1>${name}</h1>
    <p>Prueba de Nodemailer desde el servidor</p>
    

    <img src="https://i.pinimg.com/1200x/f1/9c/2f/f19c2f3dc0e1dc6a0a16c7f9138abea1.jpg" alt="imagen bebe" />
    <img src="https://raffe.com.ar/wp-content/uploads/2019/06/Mondongo-Raffe.jpg" alt="imagen bebe" />
    
    `,
  });
});
