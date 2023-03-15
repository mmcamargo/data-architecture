import { LoggedUserEntity } from '../database/entities';
import pgHelper from '../database/pgHelper';

class LoggedUsersRepository {
	async create(
		userUid: string,
		firstName: string
	): Promise<LoggedUserEntity> {
		const manager = pgHelper.client.manager;

		const loggedUser = manager.create(LoggedUserEntity, {
			userUid,
			firstName,
		});

		return await manager.save(loggedUser);
	}

	async delete(uid: string) {
		const manager = pgHelper.client.manager;

		manager.delete(LoggedUserEntity, { uid });
	}
}

const loggedUsersRepository = new LoggedUsersRepository();

export default loggedUsersRepository;
