import { IDefaultResponse } from '../../../../common/models';
import { Request, Response, NextFunction } from 'express';

const checkMissingTaskData = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userUid, title, content } = req.body;

	if (!userUid || !title || !content) {
		return res.status(400).json({
			success: false,
			message: 'Missing data.',
		} as IDefaultResponse);
	}

	next();
};

export default checkMissingTaskData;
