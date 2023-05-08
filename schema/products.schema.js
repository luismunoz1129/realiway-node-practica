const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10)

const createProductSchema = Joi.object({
    name:name.required(),
    price:price.required()
})

const updetaProductSchema = Joi.object({
    name:name,
    price:price
})


const getProductSchema = Joi.object({

    id:id.required()

})


module.exports={
  createProductSchema,
  updetaProductSchema,
  getProductSchema
}
