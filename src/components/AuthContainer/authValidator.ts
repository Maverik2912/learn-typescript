import Joi from "joi";

const authValidator = Joi.object({
    username: Joi.string().required().pattern(/^[a-zA-Z]\w{1,19}$/).max(20).messages({
        "string.base": "Ім'я користувача повинно бути рядком",
        "string.empty": "Ім'я користувача є обов'язковим полем",
        "string.pattern.base": "Ім'я користувача повинно містити літери або цифри",
        "string.max": "Ім'я користувача не може бути довше 20 символів",
    }),
    password: Joi.string().required().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/).max(20).min(8).messages({
        "string.base": "Пароль повинен бути рядком",
        "string.empty": "Пароль є обов'язковим полем",
        "string.pattern.base": "Пароль повинен містити хоча б 1 цифру, символ та велику літеру",
        "string.min": "Пароль не може бути коротше 8 символів",
        "string.max": "Пароль не може бути довше 20 символів",
    })
});

export {
    authValidator
}