import { Router } from "express";
import LikeController from "../controllers/LikeController";

const LikeRouter = Router();
LikeRouter.get("/likes", LikeController.find);
LikeRouter.get("/like/:id", LikeController.findOne);

export default LikeRouter;