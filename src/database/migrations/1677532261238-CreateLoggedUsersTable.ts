import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

class CreateLoggedUsersTable1677532261238 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'logged_users',
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
					},
					{
						name: 'first_name',
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
						name: 'fk_logged_user',
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
		await queryRunner.dropTable('logged_users', true, true, true);
	}
}

export default CreateLoggedUsersTable1677532261238;
