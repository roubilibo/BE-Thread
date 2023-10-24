import { AppDataSource } from "./data-source";
import * as express from "express";
import router from "./route/Thread";
import UserRouter from "./route/User";
import ReplyRouter from "./route/Reply";

AppDataSource.initialize()
	.then(async () => {
		const app = express();
		const port = 5000;

		app.use(express.json());

		app.use("/api/v1", router);
		app.use("/api/v1", UserRouter);
		app.use("/api/v1", ReplyRouter);

		app.listen(port, () => `Server started on port ${port}`);
	})

	.catch((error) => console.log(error));
