import { Request, Response } from "express";
import LikeServices from "../services/LikeServices";

class ReplyControllers {
	find(req: Request, res: Response) {
		LikeServices.find(req, res);
	}
	findOne(req: Request, res: Response) {
		LikeServices.findOne(req, res);
	}
}

export default new ReplyControllers();
