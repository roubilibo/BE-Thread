import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1698116861293 implements MigrationInterface {
    name = 'MyMigration1698116861293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "threads" DROP COLUMN "age"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "threads" ADD "age" integer NOT NULL`);
    }

}
