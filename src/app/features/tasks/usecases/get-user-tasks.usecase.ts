import { TasksRepository } from '../repositories';

export class GetUserTasksUseCase {
	constructor(private _repository: TasksRepository) {}

	async execute(userUid: string) {
		const response = await this._repository.getUserTasks(userUid);

		return response;
	}
}
