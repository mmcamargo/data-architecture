import 'dotenv/config';
import {
	UserEntity,
	TaskEntity,
	LoggedUserEntity,
} from '../../app/shared/database/entities';
import {
	CreateUsersTable1677532054729,
	CreateTasksTable1677532160680,
	CreateLoggedUsersTable1677532261238,
} from './../../app/shared/database/migrations';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	entities: [UserEntity, TaskEntity, LoggedUserEntity],
	migrations: [
		CreateUsersTable1677532054729,
		CreateTasksTable1677532160680,
		CreateLoggedUsersTable1677532261238,
	],
});
