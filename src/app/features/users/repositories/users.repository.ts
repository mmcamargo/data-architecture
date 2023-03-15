import { DatabaseConnection } from '../../../../main/database';
import { UserEntity } from '../../../shared/database/entities';
import { User } from '../../../models';

export class UsersRepository {
	private _repository =
		DatabaseConnection.connection.getRepository(UserEntity);

	private toModel({
		uid,
		firstName,
		lastName,
		email,
		password,
	}: UserEntity): User {
		return User.create(firstName, lastName, email, password, uid);
	}

	async create({
		uid,
		firstName,
		lastName,
		email,
		password,
	}: User): Promise<User> {
		const user = this._repository.create({
			uid,
			firstName,
			lastName,
			email,
			password,
		});

		const response = await this._repository.save(user);

		return this.toModel(response);
	}

	async getUsers() {
		const response = await this._repository.find();

		return response;
	}

	async getUserByUid(uid: string) {
		const response = await this._repository.findOne({ where: { uid } });

		return response;
	}
}
