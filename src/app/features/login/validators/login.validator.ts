import {
	HttpHelper,
	DefaultMessagesHelper,
} from '../../../shared/utils/helpers';
import { Request, Response, NextFunction } from 'express';

export const loginValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email, password } = req.body;

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

	next();
};
