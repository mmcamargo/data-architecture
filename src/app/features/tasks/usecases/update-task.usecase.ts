import { TasksRepository } from '../repositories';

export class UpdateTaskUseCase {
	constructor(private _repository: TasksRepository) {}

	async execute(
		uid: string,
		isArchived: boolean,
		title: string,
		content: string
	) {
		const response = await this._repository.updateTask(
			uid,
			isArchived,
			title,
			content
		);

		return response;
	}

	async checkTaskUid(uid: string) {
		const response = await this._repository.checkTaskUid(uid);

		return response;
	}
}
