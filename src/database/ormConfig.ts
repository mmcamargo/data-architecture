import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { UserEntity, TaskEntity, LoggedUserEntity } from './entities';
import {
	CreateLoggedUsersTable1677532261238,
	CreateTasksTable1677532160680,
	CreateUsersTable1677532054729,
} from './migrations';

const config: DataSourceOptions = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	logging: false,
	entities: [UserEntity, TaskEntity, LoggedUserEntity],
	migrations: [
		CreateUsersTable1677532054729,
		CreateTasksTable1677532160680,
		CreateLoggedUsersTable1677532261238,
	],
};

export default config;
