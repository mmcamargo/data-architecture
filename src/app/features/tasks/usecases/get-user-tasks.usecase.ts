import { TasksRepository } from '../repositories';
import { CacheRepository } from '../../../shared/database/repositores/cache.repository';

export class GetUserTasksUseCase {
	constructor(private _repository: TasksRepository) {}

	async execute(userUid: string, noCache?: boolean) {
		const cacheRepository = new CacheRepository();

		if (!noCache) {
			const cache = await cacheRepository.get(
				`USER_TASKS_LIST_${userUid}`
			);

			if (cache) {
				return cache;
			}
			const response = await this._repository.getUserTasks(userUid);

			return response;
		}

		const response = await this._repository.getUserTasks(userUid);

		return response;
	}
}
