import * as Joi from "joi";

export const createTHreadSchema = Joi.object({
	content: Joi.string(),
	image: Joi.string(),
	user: Joi.number(),
});

export const updateTHreadSchema = Joi.object({
	content: Joi.string(),
	image: Joi.string(),
});

export const createUserSchema = Joi.object({
	fullName: Joi.string().required(),
	username: Joi.string().required(),
	email: Joi.string().required(),
	password: Joi.string().required(),
	profile_picture: Joi.string(),
	profile_description: Joi.string(),
});
