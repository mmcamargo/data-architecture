import { CreateTaskUseCase } from '../usecases';
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

	// async getUsers(_: Request, res: Response) {
	// 	try {
	// 		const useCase = new GetUsersUseCase(new UsersRepository());

	// 		const response = await useCase.execute();

	// 		return HttpHelper.success(res, undefined, response);
	// 	} catch (error: any) {
	// 		return HttpHelper.serverError(res, error);
	// 	}
	// }

	// async getUserByUid(req: Request, res: Response) {
	// 	try {
	// 		const { uid } = req.params;

	// 		const useCase = new GetUserByUidUseCase(new UsersRepository());

	// 		const response = await useCase.execute(uid);

	// 		return HttpHelper.success(res, undefined, response);
	// 	} catch (error: any) {
	// 		return HttpHelper.serverError(res, error);
	// 	}
	// }
}
