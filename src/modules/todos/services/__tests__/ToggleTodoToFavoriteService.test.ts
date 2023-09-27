import AppError from '../../../../shared/infra/errors/AppError';
import { FakeTodoRepository } from '../../domain/repositories/Fakes/FakeTodoRepository';
import ToggleTodoToFavoriteService from '../ToggleTodoToFavoriteService';

let fakeTodoRepository: FakeTodoRepository;
let toggleTodoToFavorite: ToggleTodoToFavoriteService;

describe('Toggle Todo to Favorite', () => {
    beforeEach(() => {
        fakeTodoRepository = new FakeTodoRepository();
        toggleTodoToFavorite = new ToggleTodoToFavoriteService(fakeTodoRepository);
    });

    it('should be toggle a todo to favorite', async () => {
        const todo = await toggleTodoToFavorite.execute('uuid');

        expect(todo.favorite).toEqual(true);

        const sameTodoToggleFavorite = await toggleTodoToFavorite.execute('uuid');

        expect(sameTodoToggleFavorite.favorite).toEqual(false);
    });

    it('should be throw an error if todo not found', async () => {
        expect(
            toggleTodoToFavorite.execute('wrong_id')
        ).rejects.toBeInstanceOf(AppError);
    });
});
