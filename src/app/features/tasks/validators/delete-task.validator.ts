import { HttpHelper } from '../../../shared/utils/helpers';
import { Request, Response, NextFunction } from 'express';

export const deleteTaskValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userUid } = req.query;

	if (!userUid) {
		return HttpHelper.badRequest(
			res,
			'UID do usuário não encontrado.',
			404
		);
	}

	next();
};
