import { Repository } from 'typeorm';
import { ICreateUser } from '../../../domain/models/ICreateUser';
import { IUser } from '../../../domain/models/IUser';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { User } from '../entities/User';
import { AppDataSource } from '../../../../../shared/typeorm/data-source';

export default class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(User);
    }

    public async save(user: IUser): Promise<IUser> {
        return await this.ormRepository.save(user);
    }

    public async create(data: ICreateUser): Promise<IUser> {
        return this.ormRepository.create(data);
    }

    public async delete(user: IUser): Promise<void> {
        this.ormRepository.remove(user);
    }

    public async find(): Promise<IUser[]> {
        return this.ormRepository.find();
    }

    public async findById(id: string): Promise<IUser> {
        return this.ormRepository.findOne({ where: { id } });
    }

    public async findByName(name: string): Promise<IUser> {
        return this.ormRepository.findOne({ where: { name } });
    }
}
