import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { ICreateUser } from "../domain/models/ICreateUser";
import { IUser } from "../domain/models/IUser";
import { IUserRepository } from "../domain/repositories/IUserRepository";

@injectable()
export default class CreateUserService {
    constructor(
        @inject('userRepository')
        private userRepository: IUserRepository,
    ) {}

    public async execute({ name }: ICreateUser): Promise<IUser> {
        const userExists = await this.userRepository.findByName(name);

        if (userExists) {
            throw new AppError('This user already exists');
        }

        const user = await this.userRepository.create({ name });

        await this.userRepository.save(user);

        return user;
    }
}