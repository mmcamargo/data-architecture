import { usersRepository } from '../../../../repositories';
import { IDefaultResponse } from '../../../../common/models';
import { Request, Response, NextFunction } from 'express';

const checkUniqueEmail = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email } = req.body;

	const someEqualEmail = await usersRepository.verifyUniqueEmail(email);

	if (someEqualEmail) {
		return res.status(400).json({
			success: false,
			message: 'Email already registered.',
		} as IDefaultResponse);
	}

	next();
};

export default checkUniqueEmail;
