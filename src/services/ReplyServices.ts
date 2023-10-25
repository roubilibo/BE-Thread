import { Repository } from "typeorm";
import { Reply } from "../entities/Reply";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { createReplySchema } from "../utils/Validator/Threads";
class ReplysServices {
	private readonly ReplyRepository: Repository<Reply> =
		AppDataSource.getRepository(Reply);

	async find(req: Request, res: Response): Promise<Response> {
		try {
			const replies = await this.ReplyRepository.find({
				relations: ["thread", "user"],
				select: {
					thread: {
						id: true,
						content: true,
					},
					user: {
						id: true,
						fullname: true,
						email: true,
					},
				},
			});
			return res.status(200).json(replies);
		} catch (error) {
			res.status(500).json({ error: "error while getting replies" });
		}
	}
	async findOne(req: Request, res: Response): Promise<Response> {
		try {
			const id = parseInt(req.params.id);
			const reply = await this.ReplyRepository.findOne({
				where: { id: id },
				relations: ["thread", "user"],
				select: {
					thread: {
						id: true,
						content: true,
					},
					user: {
						id: true,
						fullname: true,
						email: true,
					},
				},
			});
			return res.status(200).json(reply);
		} catch (error) {
			res.status(500).json({ error: "error while getting reply" });
		}
	}

	async create(req: Request, res: Response): Promise<Response> {
		try {
			const data = req.body;
			const { error, value } = createReplySchema.validate(data);
			if (error) {
				return res.status(400).json({ error: error.details[0].message });
			}
			console.log(value);
			const reply = this.ReplyRepository.create({
				thread: value.thread_id,
				user: value.user_id,
				content: value.content,
				image: value.image,
			});
			const createReply = await this.ReplyRepository.save(reply);
			return res.status(200).json(createReply);
		} catch (error) {
			res.status(500).json({ error: "error while creating reply" });
		}
	}
}

export default new ReplysServices();
