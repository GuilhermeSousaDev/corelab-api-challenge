import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ChangeTodoColorService from '../../../services/ChangeTodoColorService';

export default class ChangeTodoColorController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { color } = req.body;

    const changeTodoColorService = container.resolve(
      ChangeTodoColorService,
    );

    const todo = await changeTodoColorService.execute(id, color);

    return res.json(todo);
  }
}
