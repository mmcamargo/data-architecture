import {
	CreateUserUseCase,
	GetUsersUseCase,
	GetUserByUidUseCase,
} from '../usecases';
import { UsersRepository } from '../repositories';
import { HttpHelper } from '../../../shared/utils';
import { Response, Request } from 'express';

export class UsersController {
	async create(req: Request, res: Response) {
		try {
			const { firstName, lastName, email, password } = req.body;

			const useCase = new CreateUserUseCase(new UsersRepository());

			const response = await useCase.execute({
				firstName,
				lastName,
				email,
				password,
			});

			return HttpHelper.success(
				res,
				'USER_SUCCESSFULLY_CREATED',
				response,
				201
			);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}

	async getUsers(_: Request, res: Response) {
		try {
			const useCase = new GetUsersUseCase(new UsersRepository());

			const response = await useCase.execute();

			return HttpHelper.success(res, undefined, response);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}

	async getUserByUid(req: Request, res: Response) {
		try {
			const { uid } = req.params;

			const useCase = new GetUserByUidUseCase(new UsersRepository());

			const response = await useCase.execute(uid);

			return HttpHelper.success(res, undefined, response);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}
}
