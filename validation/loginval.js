const joi = require('joi');
function loginvalidation(userObj) {
    let loginval = joi.object({
        email: joi.string().email({ tlds: { allow: false } }),
        password: joi.string().required(),


    })
    return loginval.validate(userObj);
}

module.exports=loginvalidation;