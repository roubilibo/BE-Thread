import * as Joi from "joi";

export const createTHreadSchema = Joi.object({
	content: Joi.string().required(),
	image: Joi.string(),
});
