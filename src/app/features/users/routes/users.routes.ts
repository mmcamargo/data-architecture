import { createUserValidator } from './../validators/create-user.validator';
import { UsersController } from './../controllers/users.controller';
import { Router } from 'express';

export const usersRouter = Router();

usersRouter.post(
	'/create',
	[createUserValidator],
	new UsersController().create
);

usersRouter.get('/', new UsersController().getUsers);

usersRouter.get('/:uid', new UsersController().getUserByUid);
