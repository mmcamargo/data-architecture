import { manageConnections } from '../../../shared/utils/functions';
import { CreateUserUseCase } from './../../../../src/app/features/users/usecases';
import { UsersRepository } from '../../../../src/app/features/users/repositories';
import { User } from '../../../../src/app/models';

describe('Create user usecase tests', () => {
	beforeAll(async () => await manageConnections('connect'));
	afterAll(async () => await manageConnections('destroy'));

	const makeSut = () => {
		return new CreateUserUseCase(new UsersRepository());
	};

	test('Should return an user', async () => {
		const sut = makeSut();

		jest.spyOn(UsersRepository.prototype, 'create').mockResolvedValue(
			new User('Matheus', 'Mariano', 'mmc@gmail.com', 'senha123')
		);

		const result = await sut.execute({
			firstName: 'Matheus',
			lastName: 'Mariano',
			email: 'mmc@gmail.com',
			password: 'senha123',
		});

		expect(result).toBeInstanceOf(User);
		expect(result).toHaveProperty('uid');
	});
});
