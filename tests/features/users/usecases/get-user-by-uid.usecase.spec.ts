import { manageConnections } from '../../../shared/utils/functions';
import { GetUserByUidUseCase } from './../../../../src/app/features/users/usecases';
import { UsersRepository } from '../../../../src/app/features/users/repositories';
import { UserEntity } from '../../../../src/app/shared/database/entities';

describe('Get user by uid usecase tests', () => {
	beforeAll(async () => await manageConnections('connect'));
	afterAll(async () => await manageConnections('destroy'));

	const makeSut = () => {
		return new GetUserByUidUseCase(new UsersRepository());
	};

	test('Should return an user entity', async () => {
		const sut = makeSut();

		jest.spyOn(UsersRepository.prototype, 'getUserByUid').mockResolvedValue(
			new UserEntity()
		);

		const result = await sut.execute('valid-uid');

		expect(result).not.toBeNull();
		expect(result).toBeInstanceOf(UserEntity);
	});

	test('Should return null', async () => {
		const sut = makeSut();

		jest.spyOn(UsersRepository.prototype, 'getUserByUid').mockResolvedValue(
			null
		);

		const result = await sut.execute('invalid-uid');

		expect(result).toBeNull();
	});
});
