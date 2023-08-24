import Joi from "joi";

const validator = Joi.object({
    username: Joi.string().required().pattern(/^[a-zA-Z]\w{1,19}$/).max(20).messages({

    }),
    password: Joi.string().required().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/).max(128).messages({

    })
})