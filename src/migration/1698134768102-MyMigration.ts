import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1698134768102 implements MigrationInterface {
    name = 'MyMigration1698134768102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "threads" ADD "postedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "threads" DROP COLUMN "postedAt"`);
    }

}
