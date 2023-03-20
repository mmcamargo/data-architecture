import { HttpHelper } from '../../../shared/utils/helpers';
import { UpdateTaskUseCase } from '../usecases';
import { TasksRepository } from '../repositories';
import { Request, Response, NextFunction } from 'express';

export const checkTaskValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { uid } = req.params;

	const useCase = new UpdateTaskUseCase(new TasksRepository());

	const isTaskRegistered = await useCase.checkTaskUid(uid);

	if (!isTaskRegistered) {
		return HttpHelper.badRequest(res, 'Tarefa não encontrada.', 404);
	}

	next();
};
