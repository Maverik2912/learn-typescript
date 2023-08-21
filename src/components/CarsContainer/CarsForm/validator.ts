import Joi from "joi";

const validator = Joi.object({
    brand: Joi.string().required().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).max(20).messages({
        "string.base": "Бренд повинен бути рядком",
        "string.empty": "Бренд є обов'язковим полем",
        "string.pattern.base": "Бренд повинен містити лише літери",
        "string.max": "Бренд не може бути довше 20 символів",
    }),
    price: Joi.number().required().integer().max(1000000).min(0).messages({
        "number.base": "Ціна є обов'язковим полем",
        "number.integer": "Ціна повинна бути цілим числом",
        "number.max": "Ціна не може перевищувати 1000000",
        "number.min": "Ціна повинна бути не менше 0",
    }),
    year: Joi.number().required().integer().max(new Date().getFullYear()).min(1990).messages({
        "number.base": "Рік є обов'язковим полем",
        "number.integer": "Рік повинен бути цілим числом",
        "number.max": `Рік не може бути пізніше поточного року (${new Date().getFullYear()})`,
        "number.min": "Рік повинен бути не раніше 1990",
    })
})

export {
    validator
}