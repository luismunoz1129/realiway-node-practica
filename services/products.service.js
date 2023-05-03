const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom')

class productService{


  constructor(){
    this.produts = [];
    this.generate();
  }


  generate(){

    for (let index = 0; index < 100; index++) {

      this.produts.push(
        {
          id:faker.datatype.uuid(1),
          name:faker.commerce.productName(),
          price: Number (faker.commerce.price()),
          img:faker.image.imageUrl(),
          block:faker.datatype.boolean()
        }
      )
    }
  }

  find(){
    return this.produts;
  }

  findOne(id){

    const product = this.produts.find( item => item.id ===id );
    if(!product){
      throw boom.notFound('product not found');
    }
    if(product.block){
      throw boom.conflict('this porduct is block')
    }

    return product;

  }

  async create(body){

    const newProduct = {
      id:faker.datatype.uuid(),
      ...body
    }

    this.produts.push(newProduct)

    return newProduct

  }

  async updata(id,data){

    const index = this.produts.findIndex( item => item.id === id )
    const product = this.produts[index]

    if (index === -1) {
      throw boom.notFound('product not foun')
    }else{
      const newProduct = {
        ...product,
        ...data
      }
      this.produts[index]= newProduct
      return newProduct
    }

  }

  async delete(id){

    const index = this.produts.findIndex((item)=> item.id === id)

    if (index === -1) {

      throw boom.notFound('porduct not found');

    }else{

      this.produts.splice(index,1)
      return {id}

    }

  }




}

module.exports=productService;
