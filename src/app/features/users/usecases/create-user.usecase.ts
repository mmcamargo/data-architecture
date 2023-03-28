import { UsersRepository } from '../repositories';
import { User } from '../../../models';

interface ICreateUserDTO {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export class CreateUserUseCase {
	constructor(private _repository: UsersRepository) {}

	async execute({ firstName, lastName, email, password }: ICreateUserDTO) {
		if ([firstName, lastName, email, password].includes('')) {
			throw new Error('User not created.');
		}

		const user = User.create(firstName, lastName, email, password);

		return await this._repository.create(user);
	}

	async checkEmail(email: string) {
		return await this._repository.checkEmail(email);
	}
}
