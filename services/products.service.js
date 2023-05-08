const boom = require('@hapi/boom')
const {models} = require('./../libs/sequelize')

class productService{


  constructor(){}


  async find(){
    const rta = await models.Products.findAll();
    return rta;
  }

  async findOne(id){

    const product = await models.Products.findByPk(id)

    if(!product){
      throw boom.notFound('Produc not found')
    }

    return product;

  }

  async create(body){

    const newProduct = await models.Products.create(body)

    return newProduct

  }

  async updata(id,data){

    const product = await this.findOne(id);

    const rta = await product.update(data)

    return rta


  }

  async delete(id){

    const product = await this.findOne(id);
    await product.destroy()

    return {id}

  }




}

module.exports=productService;
