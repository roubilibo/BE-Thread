import { Request, Response } from "express";
import ReplyServices from "../services/ReplyServices";

class ReplyControllers {
	find(req: Request, res: Response) {
		ReplyServices.find(req, res);
	}
}

export default new ReplyControllers();
