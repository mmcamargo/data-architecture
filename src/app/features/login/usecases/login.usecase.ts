import { UsersRepository } from './../../users/repositories';

interface ILoginDTO {
	email: string;
	password: string;
}

export class LoginUseCase {
	constructor(private _repository: UsersRepository) {}

	async execute({ email, password }: ILoginDTO) {
		const response = await this._repository.getUserByEmail(email);

		if (!response) return null;

		if (response.password === password) return response.uid;
	}
}
