import {
	CreateTaskUseCase,
	GetUserTasksUseCase,
	UpdateTaskUseCase,
	DeleteTaskUseCase,
} from '../usecases';
import { TasksRepository } from '../repositories';
import { HttpHelper } from '../../../shared/utils/helpers';
import { Response, Request } from 'express';

export class TasksController {
	async create(req: Request, res: Response) {
		try {
			const { userUid, title, content } = req.body;

			const useCase = new CreateTaskUseCase(new TasksRepository());

			const response = await useCase.execute({
				userUid,
				title,
				content,
			});

			return HttpHelper.success(res, undefined, response, 201);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}

	async getUserTasks(req: Request, res: Response) {
		try {
			const { userUid } = req.params;

			const useCase = new GetUserTasksUseCase(new TasksRepository());

			const response = await useCase.execute(userUid);

			return HttpHelper.success(res, undefined, response);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}

	async updateTask(req: Request, res: Response) {
		try {
			const { uid } = req.params;
			const { isArchived, title, content } = req.body;

			const useCase = new UpdateTaskUseCase(new TasksRepository());

			const response = await useCase.execute(
				uid,
				isArchived,
				title,
				content
			);

			return HttpHelper.success(res, undefined, response);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}

	async deleteTask(req: Request, res: Response) {
		try {
			const { uid } = req.params;

			const useCase = new DeleteTaskUseCase(new TasksRepository());

			const response = await useCase.execute(uid);

			return HttpHelper.success(res, undefined, response);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}
}
