import { container } from 'tsyringe';
import { IUserRepository } from '../../../modules/users/domain/repositories/IUserRepository';
import UserRepository from '../../../modules/users/infra/typeorm/repositories/UserRepository';
import { ITodoRepository } from '../../../modules/todos/domain/repositories/ITodoRepository';
import TodoRepository from '../../../modules/todos/infra/typeorm/repositories/TdooRepository';

container.registerSingleton<IUserRepository>(
    'userRepository',
    UserRepository,
);

container.registerSingleton<ITodoRepository>(
    'todoRepository',
    TodoRepository,
);
