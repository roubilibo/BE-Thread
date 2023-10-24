import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Thread } from "./Thread";

@Entity({ name: "user" })
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	fullName: string;

	@Column()
	username: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	profile_picture: string;

	@Column({ nullable: true })
	profile_description: string;

	@OneToMany(() => Thread, (thread) => thread.user, {
		onUpdate: "CASCADE",
		onDelete: "CASCADE",
	})
	threads: Thread[];
}
