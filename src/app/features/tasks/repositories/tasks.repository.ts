import { DatabaseConnection } from '../../../../main/database';
import { TaskEntity } from '../../../shared/database/entities';
import { Task } from '../../../models';

interface ITaskUpdateData {
	isArchived?: boolean;
	title?: string;
	content?: string;
}

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

	async getUserTasks(userUid: string) {
		const response = await this._repository.findBy({ userUid });

		return response;
	}

	async updateTask(
		uid: string,
		isArchived: boolean,
		title: string,
		content: string
	) {
		const data: ITaskUpdateData = {};

		if (isArchived !== undefined && isArchived !== null) {
			data['isArchived'] = isArchived;
		}
		if (title) {
			data['title'] = title;
		}
		if (content) {
			data['content'] = content;
		}

		const response = await this._repository.update(uid, data);

		return response;
	}

	async checkTaskUid(uid: string) {
		const response = await this._repository.exist({ where: { uid } });

		return response;
	}
}
