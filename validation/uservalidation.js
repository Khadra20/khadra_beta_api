
const Joi = require('joi');
function uservalidation(updatepost){
    let userval=Joi.object({
        name:Joi.string(),
        email:Joi.string().required(),
        password:Joi.string().required().max(6),
        userstatus:Joi.string(),
        roll:Joi.string()
    })
    return userval.validate(updatepost)

}
module.exports=uservalidation;