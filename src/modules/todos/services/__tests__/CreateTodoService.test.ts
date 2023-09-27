import { FakeTodoRepository } from '../../domain/repositories/Fakes/FakeTodoRepository';
import CreateTodoService from '../CreateTodoService';

describe('Create Todo', () => {
    it('should be create a new todo', async () => {
        const fakeTodoRepository = new FakeTodoRepository();
        const createTodo = new CreateTodoService(fakeTodoRepository);

        const todo = await createTodo.execute({
            title: 'Todo',
            task: 'Todo Task'
        });

        expect(todo).toHaveProperty('id');
    });
});
