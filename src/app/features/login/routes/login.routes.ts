import { loginValidator } from '../validators/login.validator';
import { LoginController } from '../controllers/login.controller';
import { Router } from 'express';

export const loginRouter = Router();

loginRouter.post('/', [loginValidator], new LoginController().login);
