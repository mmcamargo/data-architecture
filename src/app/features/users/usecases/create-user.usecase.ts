import { UsersRepository } from '../repositories';
import { User } from '../../../models';

interface ICreateUserDTO {
	name: string;
	email: string;
	password: string;
}

export class CreateUserUseCase {
	constructor(private _repository: UsersRepository) {}

	async execute({ name, email, password }: ICreateUserDTO) {
		const user = await User.create(name, email, password);

		return await this._repository.create(user);
	}

	async checkEmail(email: string) {
		return await this._repository.checkEmail(email);
	}
}
