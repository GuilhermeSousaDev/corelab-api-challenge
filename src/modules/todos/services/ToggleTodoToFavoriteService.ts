import { inject, injectable } from "tsyringe";
import { ITodoRepository } from "../domain/repositories/ITodoRepository";
import AppError from "../../../shared/infra/errors/AppError";
import { ITodo } from "../domain/models/ITodo";

@injectable()
export default class ToggleTodoToFavoriteService {
    constructor(
        @inject('todoRepository')
        private todoRepository: ITodoRepository,
    ) {}

    public async execute(id: string): Promise<ITodo> {
        const todo = await this.todoRepository.findById(id);

        if (!todo) {
            throw new AppError('Todo not Found');
        }

        todo.favorite = !todo.favorite;

        await this.todoRepository.save(todo);

        return todo;
        
    }
}