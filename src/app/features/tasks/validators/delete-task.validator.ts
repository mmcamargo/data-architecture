import { HttpHelper } from '../../../shared/utils/helpers';
import { DeleteTaskUseCase } from '../usecases';
import { TasksRepository } from '../repositories';
import { Request, Response, NextFunction } from 'express';

export const deleteTaskValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { uid } = req.params;

	const useCase = new DeleteTaskUseCase(new TasksRepository());

	const isTaskRegistered = await useCase.checkTaskUid(uid);

	if (!isTaskRegistered) {
		return HttpHelper.badRequest(res, 'Tarefa não encontrado.', 404);
	}

	next();
};
