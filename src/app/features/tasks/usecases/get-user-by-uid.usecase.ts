import { UsersRepository } from '../repositories';

export class GetUserByUidUseCase {
	constructor(private _repository: UsersRepository) {}

	async execute(uid: string) {
		const response = await this._repository.getUserByUid(uid);

		return response;
	}
}
