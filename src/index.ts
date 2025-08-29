import express from "express";
import { usuariosRoutes } from "./routes/usuarios";

export const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", usuariosRoutes);



app.listen(port, () => {
  console.log(`Esse servidor está rodando em ${port}`);
});

