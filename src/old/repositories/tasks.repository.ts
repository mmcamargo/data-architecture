import { TaskEntity } from '../database/entities';
import pgHelper from '../database/pgHelper';

class TasksRepository {
	async create(
		userUid: string,
		title: string,
		content: string
	): Promise<TaskEntity> {
		const manager = pgHelper.client.manager;

		const newTask = manager.create(TaskEntity, {
			userUid,
			title,
			content,
		});

		return await manager.save(newTask);
	}

	async getAll(): Promise<TaskEntity[]> {
		const manager = pgHelper.client.manager;

		const tasks = await manager.find(TaskEntity);

		return tasks;
	}

	async getOne(uid: string): Promise<TaskEntity | null> {
		const manager = pgHelper.client.manager;

		const task = await manager.findOne(TaskEntity, { where: { uid } });

		return task;
	}

	async getUserTasks(userUid: string): Promise<TaskEntity[]> {
		const manager = pgHelper.client.manager;

		const userTasks = await manager.findBy(TaskEntity, {
			userUid,
		});

		return userTasks;
	}

	async searchTasks(userUid: string, text: string): Promise<TaskEntity[]> {
		const manager = pgHelper.client.manager;

		const searchTitle = await manager.findBy(TaskEntity, {
			userUid,
			title: text,
		});

		const searchContent = await manager.findBy(TaskEntity, {
			userUid,
			content: text,
		});

		return [...searchTitle, ...searchContent];
	}

	updateTask(uid: string, title: string, content: string): void {
		const manager = pgHelper.client.manager;

		if (title) manager.update(TaskEntity, { uid }, { title: title });
		if (content) manager.update(TaskEntity, { uid }, { content: content });
	}

	async toggleIsArchived(uid: string) {
		const manager = pgHelper.client.manager;

		const task = await this.getOne(uid);

		if (task)
			manager.update(
				TaskEntity,
				{ uid: task.uid },
				{ isArchived: !task.isArchived }
			);
	}

	async delete(uid: string) {
		const manager = pgHelper.client.manager;

		manager.delete(TaskEntity, { uid });
	}
}

const tasksRepository = new TasksRepository();

export default tasksRepository;
