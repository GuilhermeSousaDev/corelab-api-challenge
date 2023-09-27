import { Request, Response } from "express";
import { container } from "tsyringe";
import ListTodosService from "../../../services/ListTodosService";
import CreateTodoService from "../../../services/CreateTodoService";
import DeleteTodoService from "../../../services/DeleteTodoService";
import UpdateTodoService from "../../../services/UpdateTodoService";

export default class TodoController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listTodosService = container.resolve(ListTodosService);

        const todos = await listTodosService.execute();
    
        return res.json(todos);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { title, task } = req.body;

        const createTodoService = container.resolve(CreateTodoService);

        const todo = await createTodoService.execute({ title, task });

        return res.json(todo);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id, title, task } = req.body;

        const createTodoService = container.resolve(UpdateTodoService);

        const todo = await createTodoService.execute({ id, title, task });

        return res.json(todo);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleteTodoService = container.resolve(DeleteTodoService);

        await deleteTodoService.execute(id);

        return res.json([]);
    }
}