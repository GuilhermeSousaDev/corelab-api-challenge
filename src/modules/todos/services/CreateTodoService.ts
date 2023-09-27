import { inject, injectable } from 'tsyringe';
import { ITodo } from '../domain/models/ITodo';
import { ICreateTodo } from '../domain/models/ICreateTodo';
import { ITodoRepository } from '../domain/repositories/ITodoRepository';

@injectable()
export default class CreateTodoService {
    constructor(
        @inject('todoRepository')
        private todoRepository: ITodoRepository,
    ) {}

    public async execute({ title, task }: ICreateTodo): Promise<ITodo> {
        const todo = await this.todoRepository.create({ title, task });

        await this.todoRepository.save(todo);

        return todo;
    }
}