import { manageConnections } from '../../../shared/utils/functions';
import { CreateTaskUseCase } from './../../../../src/app/features/tasks/usecases';
import { TasksRepository } from '../../../../src/app/features/tasks/repositories';
import { Task } from '../../../../src/app/models';

describe('Create task usecase tests', () => {
	beforeAll(async () => await manageConnections('connect'));
	afterAll(async () => await manageConnections('destroy'));

	const makeSut = () => {
		return new CreateTaskUseCase(new TasksRepository());
	};

	test('Should return a task', async () => {
		const sut = makeSut();

		jest.spyOn(TasksRepository.prototype, 'create').mockResolvedValue(
			new Task('valid-uid', 'title', 'content')
		);

		const result = await sut.execute({
			userUid: 'valid-uid',
			title: 'title',
			content: 'content',
		});

		expect(result).toBeInstanceOf(Task);
		expect(result).toHaveProperty('uid');
	});
});
