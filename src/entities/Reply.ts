import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	CreateDateColumn,
	ManyToMany,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { Thread } from "./Thread";
import { User } from "./User";
@Entity({ name: "replies" })
export class Reply {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	content: string;

	@ManyToOne(() => Thread, (thread) => thread.replies, {
		onUpdate: "CASCADE",
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "thread_id" })
	thread: Thread;

	@ManyToOne(() => User, (user) => user.replies, {
		onUpdate: "CASCADE",
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "user_id" })
	user: User;
}
