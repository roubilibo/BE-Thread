import { AppDataSource } from "./data-source";
import * as express from "express";
import router from "./route/Thread";
import UserRouter from "./route/User";
import ReplyRouter from "./route/Reply";
import * as cors from "cors";

AppDataSource.initialize()
	.then(async () => {
		const app = express();
		const port = 5000;

		const options: cors.CorsOptions = {
			allowedHeaders: ["X-Requested-With", "Content-Type", "Authorization"],
			credentials: true,
			methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
			origin: "*",
			preflightContinue: false,
		};

		app.use(express.json());
		app.use(cors(options));
		app.use("/api/v1", router);
		app.use("/api/v1", UserRouter);
		app.use("/api/v1", ReplyRouter);

		app.listen(port, () => `Server started on port ${port}`);
	})

	.catch((error) => console.log(error));
