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
		const user = await User.create(firstName, lastName, email, password);

		return await this._repository.create(user);
	}
}
