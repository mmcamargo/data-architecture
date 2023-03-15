import { IDefaultResponse } from '../../common/models';
import { Router, Request, Response } from 'express';
import { loggedUsersRepository, usersRepository } from '../../repositories';

const authRouter = Router();

authRouter.post('/login', async (req: Request, res: Response) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({
			success: false,
			message: 'Missing data.',
		} as IDefaultResponse);
	}

	const userValidation = await usersRepository.verifyUserCredentials(
		email,
		password
	);

	if (!userValidation) {
		return res.status(404).json({
			success: false,
			message: 'Not found.',
		} as IDefaultResponse);
	}

	const loggedUser = await loggedUsersRepository.create(
		userValidation.uid,
		userValidation.firstName
	);

	return res.status(200).json({
		success: true,
		data: {
			uid: loggedUser.uid,
			userUid: loggedUser.userUid,
			firstName: loggedUser.firstName,
		},
	} as IDefaultResponse);
});

export default authRouter;
