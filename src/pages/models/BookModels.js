import Joi from "joi";

export const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string().required(),
    category: Joi.string().required(),
    year: Joi.number().required(),
    picture: Joi.string().optional(),
    editorial: Joi.string().optional(),
    language: Joi.string().required(),
});

