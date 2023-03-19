import { TasksRepository } from '../repositories';
import { UsersRepository } from '../../users/repositories';
import { Task } from '../../../models';

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
			return await this._repository.create(task);
		}
	}

	async checkUserUid(userUid: string) {
		if (this._repository instanceof UsersRepository) {
			return await this._repository.checkUserUid(userUid);
		}
	}
}
