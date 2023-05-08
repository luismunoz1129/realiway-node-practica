
const {ProductSchema,Products } = require('./product.model')

function setupModels(sequelize){

  Products.init(ProductSchema,Products.config(sequelize))

}

module.exports=setupModels;
