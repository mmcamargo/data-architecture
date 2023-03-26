import { TasksRepository } from '../repositories';
import { UsersRepository } from '../../users/repositories';
import { CacheRepository } from './../../../shared/database/repositores/cache.repository';
import { Task } from '../../../models';
import { GetUserTasksUseCase } from './get-user-tasks.usecase';

interface ICreateTaskDTO {
	userUid: string;
	title: string;
	content: string;
}

export class CreateTaskUseCase {
	constructor(private _repository: TasksRepository | UsersRepository) {}

	async execute({ userUid, title, content }: ICreateTaskDTO) {
		const task = await Task.create(userUid, title, content);

		if (this._repository instanceof TasksRepository) {
			const response = await this._repository.create(task);

			this.setUserTasksCache(userUid);
			this.setTaskCache(task);

			return response;
		}
	}

	async checkUserUid(userUid: string) {
		if (this._repository instanceof UsersRepository) {
			const response = await this._repository.checkUserUid(userUid);

			return response;
		}
	}

	async setUserTasksCache(userUid: string) {
		const userTasks = await new GetUserTasksUseCase(
			new TasksRepository()
		).execute(userUid, true);

		const cacheRepository = new CacheRepository();

		cacheRepository.set(`USER_TASKS_LIST_${userUid}`, userTasks);
	}

	async setTaskCache(task: Task) {
		const cacheRepository = new CacheRepository();

		cacheRepository.set(`TASK_${task.uid}`, task);
	}
}
