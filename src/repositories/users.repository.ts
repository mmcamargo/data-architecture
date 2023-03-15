import { UserEntity } from '../database/entities';
import pgHelper from '../database/pgHelper';

class UsersRepository {
	async create(
		firstName: string,
		lastName: string,
		email: string,
		password: string
	): Promise<UserEntity> {
		const manager = pgHelper.client.manager;

		const newUser = manager.create(UserEntity, {
			firstName,
			lastName,
			email,
			password,
		});

		return await manager.save(newUser);
	}

	async getAll(): Promise<UserEntity[]> {
		const manager = pgHelper.client.manager;

		const users = await manager.find(UserEntity);

		return users;
	}

	async getOne(uid: string): Promise<UserEntity | null> {
		const manager = pgHelper.client.manager;

		const user = await manager.findOne(UserEntity, { where: { uid } });

		return user;
	}

	async verifyUniqueEmail(email: string): Promise<boolean> {
		const manager = pgHelper.client.manager;

		const someEqualEmail = await manager.findOne(UserEntity, {
			where: { email },
		});

		return !!someEqualEmail;
	}

	async verifyUserCredentials(
		email: string,
		password: string
	): Promise<UserEntity | null> {
		const manager = pgHelper.client.manager;

		const user = await manager.findOne(UserEntity, {
			where: {
				email,
				password,
			},
		});

		return user;
	}
}

const usersRepository = new UsersRepository();

export default usersRepository;
