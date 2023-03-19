import { createTaskValidator } from '../validators/create-user.validator';
import { TasksController } from '../controllers/tasks.controller';
import { Router } from 'express';

export const tasksRouter = Router();

tasksRouter.post(
	'/create',
	[createTaskValidator],
	new TasksController().create
);

// tasksRouter.get('/', new UsersController().getUsers);

// tasksRouter.get('/:uid', new UsersController().getUserByUid);
