import { v4 } from 'uuid';

export class User {
	uid: string;
	name: string;
	email: string;
	password: string;

	constructor(name: string, email: string, password: string, uid?: string) {
		this.uid = uid ?? v4();
		this.name = name;
		this.email = email;
		this.password = password;
	}

	static create(name: string, email: string, password: string, uid?: string) {
		return new User(name, email, password, uid);
	}

	toJson() {
		return {
			uid: this.uid,
			name: this.name,
			email: this.email,
			password: this.password,
		};
	}
}
