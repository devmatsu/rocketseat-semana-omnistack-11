const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    checkOngStore() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().required().min(10).max(13),
                city: Joi.string().required(),
                uf: Joi.string().required().length(2),
            })
        });
    },

    checkHeader() {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required(),
            }).unknown(),
        })
    },
    
    checkPage() {
        return celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number(), 
            }),
        });
    },

    checkId() {
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            })
        })
    },
}