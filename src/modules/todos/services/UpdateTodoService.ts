import { inject, injectable } from 'tsyringe';
import { ITodoRepository } from '../domain/repositories/ITodoRepository';
import AppError from '../../../shared/infra/errors/AppError';
import { IUpdateTodo } from '../domain/models/IUpdateTodo';
import { ITodo } from '../domain/models/ITodo';

@injectable()
export default class UpdateTodoService {
    constructor(
        @inject('todoRepository')
        private todoRepository: ITodoRepository,
    ) {}

    public async execute({ id, task, title }: IUpdateTodo): Promise<ITodo> {
        const todo = await this.todoRepository.findById(id);

        if (!todo) {
            throw new AppError('Todo not Found');
        }

        todo.title = title;
        todo.task = task;

        await this.todoRepository.save(todo);

        return todo;
        
    }
}