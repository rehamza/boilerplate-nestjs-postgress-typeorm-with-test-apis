import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1645713274562 implements MigrationInterface {
    name = 'myInit1645713274562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying(100) NOT NULL, "dateOfBirth" character varying NOT NULL, "nationality" character varying NOT NULL, "country" character varying NOT NULL, "phoneNumber" character varying(15) NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isVerified" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
