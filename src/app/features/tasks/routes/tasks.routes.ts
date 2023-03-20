import {
	createTaskValidator,
	checkTaskValidator,
	updateTaskValidator,
} from '../validators';
import { TasksController } from '../controllers/tasks.controller';
import { Router } from 'express';

export const tasksRouter = Router();

tasksRouter.post(
	'/create',
	[createTaskValidator],
	new TasksController().create
);

tasksRouter.get('/:uid', new TasksController().getUserTasks);

tasksRouter.put(
	'/:uid',
	[checkTaskValidator, updateTaskValidator],
	new TasksController().updateTask
);

tasksRouter.delete(
	'/:uid',
	[checkTaskValidator],
	new TasksController().deleteTask
);
