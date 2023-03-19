import 'dotenv/config';
import { UserEntity, TaskEntity } from '../../app/shared/database/entities';
import {
	CreateUsersTable1677532054729,
	CreateTasksTable1677532160680,
} from './../../app/shared/database/migrations';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	entities: [UserEntity, TaskEntity],
	migrations: [CreateUsersTable1677532054729, CreateTasksTable1677532160680],
});
