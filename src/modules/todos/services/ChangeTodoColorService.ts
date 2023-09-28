import { inject, injectable } from 'tsyringe';
import { ITodoRepository } from '../domain/repositories/ITodoRepository';
import AppError from '../../../shared/infra/errors/AppError';
import { ITodo } from '../domain/models/ITodo';

@injectable()
export default class ChangeTodoColorService {
  constructor(
    @inject('todoRepository')
    private todoRepository: ITodoRepository,
  ) {}

  public async execute(id: string, color: string): Promise<ITodo> {
    const todo = await this.todoRepository.findById(id);

    if (!todo) {
      throw new AppError('Todo not Found');
    }

    todo.color = color;

    await this.todoRepository.save(todo);

    return todo;
  }
}
