import { TasksRepository } from '../repositories';

export class DeleteTaskUseCase {
	constructor(private _repository: TasksRepository) {}

	async execute(uid: string) {
		const response = await this._repository.deleteTask(uid);

		return response;
	}

	async checkTaskUid(uid: string) {
		const response = await this._repository.checkTaskUid(uid);

		return response;
	}
}
