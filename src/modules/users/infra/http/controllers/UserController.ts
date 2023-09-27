import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../../services/CreateUserService';

export default class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;

        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({ name });

        return res.json(user);
    }
}