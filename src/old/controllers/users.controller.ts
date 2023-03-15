import { usersRepository } from '../repositories';
import { IDefaultResponse } from '../common/models';
import { Request, Response } from 'express';

class UsersController {
	async post(req: Request, res: Response) {
		const { firstName, lastName, email, password } = req.body;

		const newUser = await usersRepository.create(
			firstName,
			lastName,
			email,
			password
		);

		return res.status(201).json({
			success: true,
			data: newUser,
		} as IDefaultResponse);
	}

	async getAll(req: Request, res: Response) {
		const users = await usersRepository.getAll();

		return res.status(200).json({
			success: true,
			data: users,
		});
	}

	async getOne(req: Request, res: Response) {
		const { uid } = req.params;

		const user = await usersRepository.getOne(uid);

		return res.status(200).json({
			success: true,
			data: user,
		});
	}
}

const usersController = new UsersController();

export default usersController;
