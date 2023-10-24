import { Router } from "express";
import ReplyControllers from "../controllers/ReplyControllers";

const ReplyRouter = Router();
ReplyRouter.get("/replies", ReplyControllers.find);

export default ReplyRouter;