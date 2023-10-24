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
import { User } from "./User";

@Entity({ name: "follows" })
export class Following {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User, (user) => user.following, {
		onUpdate: "CASCADE",
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "following_id" })
	user: User;
	
	@ManyToOne(() => User, (user) => user.following, {
		onUpdate: "CASCADE",
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "follower_id" })
	userd: User;
}