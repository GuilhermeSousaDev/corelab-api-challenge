import AppError from '../../../../shared/infra/errors/AppError';
import { FakeTodoRepository } from '../../domain/repositories/Fakes/FakeTodoRepository';
import DeleteTodoService from '../DeleteTodoService';
import ListTodosService from '../ListTodosService';

let fakeTodoRepository: FakeTodoRepository;
let deleteTodo: DeleteTodoService;
let listTodos: ListTodosService;

describe('Delete Todo', () => {
    beforeEach(() => {
        fakeTodoRepository = new FakeTodoRepository();
        deleteTodo = new DeleteTodoService(fakeTodoRepository);
        listTodos = new ListTodosService(fakeTodoRepository);
    });

    it('should be delete a todo', async () => {
        await deleteTodo.execute('uuid');

        const todos = await listTodos.execute();

        expect(todos).toHaveLength(0);
    });

    it('should be to throw an error if todo not found', async () => {
        expect(
            deleteTodo.execute('wrong_id')
        ).rejects.toBeInstanceOf(AppError);
    });
});
