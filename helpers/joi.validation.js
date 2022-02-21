const Joi = require('@hapi/joi');

const userParamsValidation = {
	createUser: {
		body: {
			email: Joi.string().required(),
			name: Joi.string().required(),
			phone: Joi.string().required()
		}
	}
};

const authParamsValidation = {
	loginUser: {
		body: {
			email: Joi.string().required(),
			password: Joi.string().required()
		}
	}
};

module.exports = {
    userParamsValidation,
    authParamsValidation
};
