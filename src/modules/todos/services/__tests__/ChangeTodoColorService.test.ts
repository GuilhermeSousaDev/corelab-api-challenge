import AppError from '../../../../shared/infra/errors/AppError';
import { FakeTodoRepository } from '../../domain/repositories/Fakes/FakeTodoRepository';
import ChangeTodoColorService from '../ChangeTodoColorService';

let fakeTodoRepository: FakeTodoRepository;
let changeTodoColorService: ChangeTodoColorService;

describe('Toggle Todo to Favorite', () => {
  beforeEach(() => {
    fakeTodoRepository = new FakeTodoRepository();
    changeTodoColorService = new ChangeTodoColorService(fakeTodoRepository);
  });

  it('should be change a todo color', async () => {
    const todo = await changeTodoColorService.execute('uuid', 'black');

    expect(todo.color).toEqual('black');
  });

  it('should be throw an error if todo not found', async () => {
    expect(changeTodoColorService.execute('wrong_id', '')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
