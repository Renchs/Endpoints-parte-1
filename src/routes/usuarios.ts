import { Request, Response, Router } from "express";
import db from "../client/db";

export const usuariosRoutes = Router();

const create = (req: Request, res: Response) => {
    const user = req.body;
    const newUser = db.create(user);
    res.send(newUser).status(201);
}

const findAll = (req: Request, res: Response) => {
    const users = db.findAll();
    res.send(users).status(200);
}

const findById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = db.findById(id);
    res.send(user).status(200);
}

const updateById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = req.body;

    const updateUser = db.updateById(id, user);
    res.send(updateUser).status(200);

}

const deleteById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  
  res.send(db.remove(id)).status(200);
};

usuariosRoutes.get("/", findAll);
usuariosRoutes.get("/:id", findById);
usuariosRoutes.post("/", create);
usuariosRoutes.put("/:id", updateById);
usuariosRoutes.delete("/:id", deleteById);


// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/*
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    {
        name: String,
        email: String,
        password: String
    }
*/

