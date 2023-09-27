import { FakeTodoRepository } from '../../domain/repositories/Fakes/FakeTodoRepository';
import ListTodosService from '../ListTodosService';

describe('List Todos', () => {
    it('should be list all todos', async () => {
        const fakeTodoRepository = new FakeTodoRepository();
        const listTodo = new ListTodosService(fakeTodoRepository);

        const todos = await listTodo.execute();

        expect(todos).toBeDefined();
        expect(todos).toHaveLength(1);
    });
});
