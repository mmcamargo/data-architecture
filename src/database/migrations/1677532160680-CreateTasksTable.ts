import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

class CreateTasksTable1677532160680 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'tasks',
				columns: [
					{
						name: 'uid',
						type: 'uuid',
						isPrimary: true,
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'user_uid',
						type: 'uuid',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'is_archived',
						type: 'boolean',
						default: false,
					},
					{
						name: 'title',
						type: 'varchar',
						isNullable: false,
						length: '255',
					},
					{
						name: 'content',
						type: 'varchar',
						isNullable: false,
						length: '255',
					},
					{
						name: 'created_at',
						type: 'timestamp',
						isNullable: false,
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						isNullable: true,
					},
				],
				foreignKeys: [
					new TableForeignKey({
						name: 'fk_task_user',
						columnNames: ['user_uid'],
						referencedColumnNames: ['uid'],
						referencedTableName: 'users',
						onDelete: 'CASCADE',
					}),
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('tasks', true, true, true);
	}
}

export default CreateTasksTable1677532160680;
