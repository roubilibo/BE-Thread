import * as Joi from "joi";

export const createTHreadSchema = Joi.object({
	content: Joi.string(),
	image: Joi.string(),
	user: Joi.number(),
});
