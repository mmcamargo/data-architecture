import {
	HttpHelper,
	DefaultMessagesHelper,
} from '../../../shared/utils/helpers';
import { CreateTaskUseCase } from '../usecases/create-task.usecase';
import { UsersRepository } from '../../users/repositories/users.repository';
import { Request, Response, NextFunction } from 'express';

export const createTaskValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userUid, title, content } = req.body;

	if (!userUid) {
		return HttpHelper.badRequest(
			res,
			DefaultMessagesHelper.notFound('UID do usuário'),
			404
		);
	}

	if (!title) {
		return HttpHelper.badRequest(
			res,
			DefaultMessagesHelper.notFound('título'),
			404
		);
	}

	if (!content) {
		return HttpHelper.badRequest(
			res,
			DefaultMessagesHelper.notFound('conteúdo'),
			404
		);
	}

	const useCase = new CreateTaskUseCase(new UsersRepository());

	const isUserRegistered = await useCase.checkUserUid(userUid);

	if (!isUserRegistered) {
		return HttpHelper.badRequest(res, 'Usuário não encontrado.', 404);
	}

	next();
};
