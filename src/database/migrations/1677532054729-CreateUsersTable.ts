import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class CreateUsersTable1677532054729 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'uid',
						type: 'uuid',
						isPrimary: true,
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'first_name',
						type: 'varchar',
						isNullable: false,
						length: '255',
					},
					{
						name: 'last_name',
						type: 'varchar',
						isNullable: false,
						length: '255',
					},
					{
						name: 'email',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
						length: '255',
					},
					{
						name: 'password',
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
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users', true, true, true);
	}
}

export default CreateUsersTable1677532054729;
