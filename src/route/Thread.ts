import * as express from "express";
import { Router } from "express";
import ThreadControllers from "../controllers/ThreadControllers";

const router = Router();
router.get("/threads", ThreadControllers.find);
router.get("/thread/:id", ThreadControllers.findOne);
router.post("/thread", ThreadControllers.create);
router.patch("/thread/:id", ThreadControllers.update);

export default router;
