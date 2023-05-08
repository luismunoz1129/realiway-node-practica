
const {Model,DataTypes} = require('sequelize')

const PRODUCT_TABLE ="products";

const ProductSchema = {
  id:{
    allowNoll:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
  },
  name:{
    allowNoll:false,
    type:DataTypes.STRING,
    unique:true
  },
  price:{
    allowNoll:false,
    type:DataTypes.INTEGER
  }

}


class Products extends Model{

    static associate(){
      //models
    }

    static config(sequelize){

      return{
        sequelize,
        tableName:PRODUCT_TABLE,
        modelName:"Products",
        timestamps:false
      }

    }

}


module.exports = {PRODUCT_TABLE, ProductSchema,Products }
