const Joi = require('joi');


const Schema = Joi.object().keys({
    fullName: Joi.string().max(50).default(""),
    username: Joi.string().max(25).required(),
    email: Joi.string().email().required()
})


const queryErrorSchema = (req, res, next) => {
    const result = Schema.validate(req.body);
    if(result.error){
        return res.json({error: result.error})
    }
    return next();
}

module.exports = {queryErrorSchema};