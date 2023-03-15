import { usersRouter, tasksRouter, authRouter } from './routes';
import pgHelper from './database/pgHelper';
import express from 'express';
import cors from 'cors';

const api = express();
const port = process.env.PORT;

api.use(express.json(), cors());

api.use(usersRouter);
api.use(tasksRouter);
api.use(authRouter);

pgHelper
	.connect()
	.then(() => {
		api.listen(port, () => console.log('ok'));
	})
	.catch((error) => console.log(error));
