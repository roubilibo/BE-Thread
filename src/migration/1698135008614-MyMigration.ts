import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1698135008614 implements MigrationInterface {
    name = 'MyMigration1698135008614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "postedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "postedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

}
