import { v4 } from 'uuid';

export class User {
	uid: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;

	constructor(
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		uid?: string
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.uid = uid ?? v4();
	}

	static create(
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		uid?: string
	) {
		return new User(firstName, lastName, email, password, uid);
	}

	toJson() {
		return {
			uid: this.uid,
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			password: this.password,
		};
	}
}
