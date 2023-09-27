import AppError from '../../../../shared/infra/errors/AppError';
import { FakeTodoRepository } from '../../domain/repositories/Fakes/FakeTodoRepository';
import UpdateTodoService from '../UpdateTodoService';

let fakeTodoRepository: FakeTodoRepository;
let updateTodo: UpdateTodoService;

describe('Update Todo', () => {
    beforeEach(() => {
        fakeTodoRepository = new FakeTodoRepository();
        updateTodo = new UpdateTodoService(fakeTodoRepository);
    });

    it('should be update a todo', async () => {
        const todo = await updateTodo.execute({
            id: 'uuid',
            title: 'update title',
            task: 'update task',
        });

        expect(todo.title).toEqual('update title');
        expect(todo.task).toEqual('update task');
    });

    it('should be throw an error if todo not found', async () => {
        expect(
            updateTodo.execute({
                id: 'wrong_id',
            })
        ).rejects.toBeInstanceOf(AppError);
    });
});
