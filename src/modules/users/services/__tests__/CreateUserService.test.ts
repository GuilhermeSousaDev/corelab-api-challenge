import AppError from '../../../../shared/infra/errors/AppError';
import { FakeUserRepository } from '../../domain/repositories/Fakes/FakeUserRepository';
import CreateUserService from '../CreateUserService';

let fakeUserRepository: FakeUserRepository;
let createUser: CreateUserService;

describe('Create Users', () => {
    beforeEach(() => {
        fakeUserRepository = new FakeUserRepository();
        createUser = new CreateUserService(fakeUserRepository);
    });

    it('should be create a new user', async () => {
        const user = await createUser.execute({
            name: 'Diego',
        });

        expect(user).toHaveProperty('id');
    });

    it('should be throw an error if user already exists', async () => {
        await createUser.execute({
            name: 'Diego',
        });

        expect(
            createUser.execute({
                name: 'Diego',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
