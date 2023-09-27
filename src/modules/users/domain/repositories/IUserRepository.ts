import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';

export interface IUserRepository {
    save(user: IUser): Promise<IUser>;
    create(data: ICreateUser): Promise<IUser>;
    delete(user: IUser): Promise<void>;
    find(): Promise<IUser[]>;
    findById(id: string): Promise<IUser>;
    findByName(name: string): Promise<IUser>;
}
