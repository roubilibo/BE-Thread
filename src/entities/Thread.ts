import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "threads" })
export class Thread {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	content: string;

	@Column({ nullable: true })
	image: string;
}
