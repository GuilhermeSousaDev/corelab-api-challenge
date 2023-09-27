import { Request, Response } from "express";
import { container } from "tsyringe";
import ToggleTodoToFavoriteService from "../../../services/ToggleTodoToFavoriteService";

export default class ToggleTodoToFavoriteController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const toggleTodoToFavoriteService = container.resolve(ToggleTodoToFavoriteService);

        const todo = await toggleTodoToFavoriteService.execute(id);
    
        return res.json(todo);
    }
}