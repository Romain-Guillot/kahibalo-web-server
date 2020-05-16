import Joi = require("@hapi/joi");

export const configuration = {
    envFilePath: '.development.env',
    validationSchema: Joi.object({
        SERVER_BASE_URL: Joi.string().required(),
        PORT: Joi.number().required()
    }),
    validationOptions: {
        abortEarly: true,
    },
}