import { IDefaultResponse } from '../../../../common/models';
import { Request, Response, NextFunction } from 'express';

const checkMissingUserData = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { firstName, lastName, email, password } = req.body;

	if (!firstName || !lastName || !email || !password) {
		return res.status(400).json({
			success: false,
			message: 'Missing data.',
		} as IDefaultResponse);
	}

	next();
};

export default checkMissingUserData;
