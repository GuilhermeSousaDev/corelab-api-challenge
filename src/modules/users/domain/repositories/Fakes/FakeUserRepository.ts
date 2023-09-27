import { User } from '../../../infra/typeorm/entities/User';
import { ICreateUser } from '../../models/ICreateUser';
import { IUser } from '../../models/IUser';
import { IUserRepository } from '../IUserRepository';
import { randomUUID } from 'crypto';

export class FakeUserRepository implements IUserRepository {
    protected users: IUser[] = [
        {
            id: 'uuid',
            name: 'Guilherme',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ];

    public async save(user: IUser): Promise<IUser> {
        const findIndex = this.users.findIndex(
            findUser => findUser.id === user.id
        );

        this.users[findIndex] = user;

        return user;
    }

    public async find(): Promise<IUser[]> {
        return this.users;
    }

    public async findById(id: string): Promise<IUser> {
        return this.users.find(user => user.id === id);
    }

    public async findByName(name: string): Promise<IUser> {
        return this.users.find(user => user.name === name);
    }

    public async create({ name }: ICreateUser): Promise<IUser> {
        const user = new User();

        user.id = randomUUID();
        user.name = name;

        this.users.push(user);

        return user;
    }

    public async delete(user: IUser): Promise<void> {
        this.users = this.users.filter(({ id }) => id !== user.id);
    }
}