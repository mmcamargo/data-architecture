import { v4 } from 'uuid';

export class Task {
	uid: string;
	userUid: string;
	isArchived: boolean;
	title: string;
	content: string;

	constructor(
		userUid: string,
		title: string,
		content: string,
		isArchived?: boolean,
		uid?: string
	) {
		this.uid = uid ?? v4();
		this.userUid = userUid;
		this.isArchived = isArchived ?? false;
		this.title = title;
		this.content = content;
	}

	static create(
		userUid: string,
		title: string,
		content: string,
		isArchived?: boolean,
		uid?: string
	) {
		return new Task(userUid, title, content, isArchived, uid);
	}

	toJson() {
		return {
			uid: this.uid,
			userUid: this.userUid,
			isArchived: this.isArchived,
			title: this.title,
			content: this.content,
		};
	}
}
