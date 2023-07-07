import { Router } from "express";
import todoHandler from "../handlers/todoHandler.js";

const todoRouter = Router();

todoRouter.post('/', todoHandler.create);
todoRouter.get('/:id', todoHandler.get);
todoRouter.get('/', todoHandler.list);
todoRouter.put('/:id', todoHandler.update);
todoRouter.delete('/:id', todoHandler.delete);

export default todoRouter;