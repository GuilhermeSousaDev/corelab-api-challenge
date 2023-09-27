import { inject, injectable } from 'tsyringe';
import { ITodo } from '../domain/models/ITodo';
import { ITodoRepository } from '../domain/repositories/ITodoRepository';

@injectable()
export default class ListTodosService {
    constructor(
        @inject('todoRepository')
        private todoRepository: ITodoRepository,
    ) {}

    public async execute(): Promise<ITodo[]> {
        const todos = await this.todoRepository.find();

        return todos;
    }
}