import { Request, Response } from "express";
import ThreadServices from "../services/ThreadServices";

class ThreadControllers {
	find(req: Request, res: Response) {
		ThreadServices.find(req, res);
	}
	create(req: Request, res: Response) {
		ThreadServices.create(req, res);
	}
	findOne(req: Request, res: Response) {
		ThreadServices.findOne(req, res);
	}
	update(req: Request, res: Response) {
		ThreadServices.update(req, res);
	}
	delete(req: Request, res: Response) {
		ThreadServices.delete(req, res);
	}
}

export default new ThreadControllers();
