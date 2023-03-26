import { CacheRepository } from './../../../shared/database/repositores/cache.repository';
import { GetUserTasksUseCase } from './get-user-tasks.usecase';
import { TasksRepository } from '../repositories';

export class DeleteTaskUseCase {
	constructor(private _repository: TasksRepository) {}

	async execute(uid: string, userUid: string) {
		const response = await this._repository.deleteTask(uid);

		this.setUserTasksCache(userUid);

		return response;
	}

	async checkTaskUid(uid: string) {
		const response = await this._repository.checkTaskUid(uid);

		return response;
	}

	async setUserTasksCache(userUid: string) {
		const userTasks = await new GetUserTasksUseCase(
			new TasksRepository()
		).execute(userUid, true);

		const cacheRepository = new CacheRepository();

		cacheRepository.set(`USER_TASKS_LIST_${userUid}`, userTasks);
	}
}
