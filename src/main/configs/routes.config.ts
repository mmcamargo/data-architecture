import { usersRouter } from '../../app/features/users/routes';
import { Express } from 'express';

export const makeRoutes = (app: Express) => {
	app.use('/users', usersRouter);
};
