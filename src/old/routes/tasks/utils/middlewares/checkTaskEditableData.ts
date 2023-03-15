import { IDefaultResponse } from '../../../../common/models';
import { Request, Response, NextFunction } from 'express';

const checkTaskEditableData = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { title, content } = req.body;

	if (!title && !content) {
		return res.status(400).json({
			success: false,
			message: 'Missing data.',
		} as IDefaultResponse);
	}

	next();
};

export default checkTaskEditableData;
