import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
	JoinColumn,
	CreateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Like } from "./Like";
import { Reply } from "./Reply";

@Entity({ name: "threads" })
export class Thread {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	content: string;

	@Column({ nullable: true })
	image: string;

	@CreateDateColumn({ type: "timestamp with time zone" })
	postedAt: Date;

	@ManyToOne(() => User, (user) => user.threads, {
		onUpdate: "CASCADE",
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "created_by" })
	user: User;

	@OneToMany(() => Like, (likes) => likes.thread, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	likes: Like[];

	@OneToMany(() => Reply, (replies) => replies.thread, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	replies: Reply[];
}
