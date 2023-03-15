import { BaseEntity, UserEntity } from '.';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
@Entity({ name: 'logged_users' })
class LoggedUserEntity extends BaseEntity {
	@Column({ name: 'user_uid' })
	userUid!: string;

	@Column({ name: 'first_name' })
	firstName!: string;

	@OneToOne(() => UserEntity, (fk) => fk.uid)
	@JoinColumn({ name: 'user_uid', referencedColumnName: 'uid' })
	user!: UserEntity;
}

export default LoggedUserEntity;
