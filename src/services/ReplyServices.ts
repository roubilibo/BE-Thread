import { Repository } from "typeorm";
import { Reply } from "../entities/Reply";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

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
}

export default new ReplysServices();
