import { BaseEntity, UserEntity } from '.';
import { Entity, Column, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';

@Entity({ name: 'tasks' })
class TaskEntity extends BaseEntity {
	@Column({ name: 'user_uid' })
	userUid!: string;

	@Column({ name: 'is_archived' })
	isArchived!: boolean;

	@Column()
	title!: string;

	@Column()
	content!: string;

	@ManyToOne(() => UserEntity, (fk) => fk.tasks)
	@JoinColumn({ name: 'user_uid', referencedColumnName: 'uid' })
	user!: UserEntity;
}

export default TaskEntity;
