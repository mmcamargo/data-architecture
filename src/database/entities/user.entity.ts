import { BaseEntity, TaskEntity } from '.';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity({ name: 'users' })
class UserEntity extends BaseEntity {
	@Column({ name: 'first_name' })
	firstName!: string;

	@Column({ name: 'last_name' })
	lastName!: string;

	@Column()
	email!: string;

	@Column()
	password!: string;

	@OneToMany(() => TaskEntity, (fk) => fk.user)
	@JoinColumn({ name: 'uid', referencedColumnName: 'user_uid' })
	tasks?: TaskEntity[];
}

export default UserEntity;
