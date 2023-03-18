import { BaseEntity, TaskEntity } from '.';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
	@Column()
	name!: string;

	@Column()
	email!: string;

	@Column()
	password!: string;

	@OneToMany(() => TaskEntity, (fk) => fk.user)
	@JoinColumn({ name: 'uid', referencedColumnName: 'user_uid' })
	tasks?: TaskEntity[];
}
