import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../../modules/users/infra/typeorm/entities/User';
import { Todo } from '../../modules/todos/infra/typeorm/entities/Todo';

export const AppDataSource = new DataSource({
    type: 'postgres',
    username: 'postgres',
    database: 'postgres',
    password: 'postgres',
    port: 54321,
    synchronize: true,
    logging: false,
    entities: [User, Todo],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => console.log('Conectado'))
    .catch(e => console.log(e));
