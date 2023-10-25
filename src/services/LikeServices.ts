import { Repository } from "typeorm";
import { Like } from "../entities/Like";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { REPLCommand } from "repl";
class LikeServices {
	private readonly LikeRepository: Repository<Like> =
		AppDataSource.getRepository(Like);

	async find(req: Request, res: Response): Promise<Response> {
		try {
			const likes = await this.LikeRepository.find({
				relations: ["thread", "user"],
			});
			return res.status(200).send(likes);
		} catch (error) {
			res.status(500).json({ error: "error while getting likes" });
		}
	}
	async findOne(req: Request, res: Response): Promise<Response> {
		try {
			const id = parseInt(req.params.id);
			const like = await this.LikeRepository.findOne({
				where: { id: id },
				relations: ["thread", "user"],
			});
			return res.status(200).send(like);
		} catch (error) {
			return res.status(500).send(error)
		}
	}

	async update 

}

export default new LikeServices();
