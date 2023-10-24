import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	CreateDateColumn,
	JoinColumn,
} from "typeorm";
import { Thread } from "./Thread";
import { Like } from "./Like";
import { Reply } from "./Reply";
import { Following } from "./Following";

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

	@OneToMany(() => Like, (likes) => likes.user, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	likes: Like[];

	@OneToMany(() => Reply, (replies) => replies.user, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	replies: Reply[];

	@OneToMany(() => Following, (follows) => follows.following, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	following: Following[];

	@OneToMany(() => Following, (follows) => follows.follower, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	followers: Following[];
}
