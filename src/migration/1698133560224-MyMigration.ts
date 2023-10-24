import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1698133560224 implements MigrationInterface {
    name = 'MyMigration1698133560224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "profile_picture"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "profile_description"`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "content" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "thread_id" integer`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_1af58ca9000874da2171004d164" FOREIGN KEY ("thread_id") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_c961efa3687d100ed22cd409534" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_c961efa3687d100ed22cd409534"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_1af58ca9000874da2171004d164"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "thread_id"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "profile_description" character varying`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "profile_picture" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "replies" ADD "fullName" character varying NOT NULL`);
    }

}
