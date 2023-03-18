import {
	HttpHelper,
	DefaultMessagesHelper,
} from '../../../shared/utils/helpers';
import { CreateUserUseCase } from './../usecases/create-user.usecase';
import { UsersRepository } from '../repositories';
import { Request, Response, NextFunction } from 'express';

export const createUserValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { name, email, password } = req.body;

	if (!name) {
		return HttpHelper.badRequest(
			res,
			DefaultMessagesHelper.notFound('nome'),
			404
		);
	}

	if (!email) {
		return HttpHelper.badRequest(
			res,
			DefaultMessagesHelper.notFound('e-mail'),
			404
		);
	}

	if (!password) {
		return HttpHelper.badRequest(
			res,
			DefaultMessagesHelper.notFound('senha'),
			404
		);
	}

	const useCase = new CreateUserUseCase(new UsersRepository());

	const isEmailRegistered = await useCase.checkEmail(email);

	if (isEmailRegistered) {
		return HttpHelper.badRequest(
			res,
			DefaultMessagesHelper.duplicatedProperty('e-mail', email),
			400
		);
	}

	next();
};
