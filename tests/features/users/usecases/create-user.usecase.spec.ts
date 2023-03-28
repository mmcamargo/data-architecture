import { manageConnections } from '../../../shared/utils/functions';
import { CreateUserUseCase } from './../../../../src/app/features/users/usecases/create-user.usecase';
import { UsersRepository } from '../../../../src/app/features/users/repositories';
import { User } from '../../../../src/app/models';

describe('Create user tests', () => {
	beforeAll(async () => await manageConnections('connect'));
	afterAll(async () => await manageConnections('destroy'));

	const makeSut = () => {
		return new CreateUserUseCase(new UsersRepository());
	};

	test('abc', async () => {
		const sut = makeSut();
		const result = await sut.execute({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		});

		expect(result).toThrow('User not created.');
	});
});
