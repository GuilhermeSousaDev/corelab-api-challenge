import { inject, injectable } from "tsyringe";
import { ITodoRepository } from "../domain/repositories/ITodoRepository";
import AppError from "../../../shared/infra/errors/AppError";

@injectable()
export default class DeleteTodoService {
    constructor(
        @inject('todoRepository')
        private todoRepository: ITodoRepository,
    ) {}

    public async execute(id: string): Promise<void> {
        const todo = await this.todoRepository.findById(id);

        if (!todo) {
            throw new AppError('Todo not Found');
        }

        await this.todoRepository.delete(todo);
        
    }
}