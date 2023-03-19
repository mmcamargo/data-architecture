import { DatabaseConnection } from '../../../../main/database';
import { TaskEntity } from '../../../shared/database/entities';
import { Task } from '../../../models';

export class TasksRepository {
	private _repository =
		DatabaseConnection.connection.getRepository(TaskEntity);

	private toModel({
		uid,
		userUid,
		isArchived,
		title,
		content,
	}: TaskEntity): Task {
		return Task.create(userUid, title, content, isArchived, uid);
	}

	async create({
		uid,
		userUid,
		isArchived,
		title,
		content,
	}: Task): Promise<Task> {
		const task = this._repository.create({
			uid,
			userUid,
			isArchived,
			title,
			content,
		});

		const response = await this._repository.save(task);

		return this.toModel(response);
	}

	// async getUsers() {
	// 	const response = await this._repository.find();

	// 	return response;
	// }

	// async getUserByUid(uid: string) {
	// 	const response = await this._repository.findOne({ where: { uid } });

	// 	return response;
	// }

	// async getUserByEmail(email: string) {
	// 	const response = await this._repository.findOneBy({
	// 		email,
	// 	});

	// 	return response;
	// }
}
