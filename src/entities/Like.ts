import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Thread } from "./Thread";

@Entity({ name: "likes" })
export class Like {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User, (user) => user.likes, {
		onUpdate: "CASCADE",
		onDelete: "CASCADE",
	})
	user: User;

	@ManyToOne(() => Thread, (thread) => thread.likes, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	thread: Thread;
}
