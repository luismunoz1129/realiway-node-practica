const express = require('express');
const productsService = require('./../services/products.service');
const ValidatorHandler = require('./../middleware/schema.handler');
const {createProductSchema,updetaProductSchema,getProductSchema} = require('./../schema/products.schema')

const router = express.Router()
const service = new productsService();


router.get('/',async(req,res)=>{

  const products =await service.find()

  if(products){
    res.status(200).json(products)
  }else{
    res.status(404).json({mensaje:'not_fond'})
  }

})


router.get('/:id',
ValidatorHandler(getProductSchema,'params'),
async(req,res,next)=>{

      try {

        const {id} = req.params
        const product = await service.findOne(id)
        res.status(200).json(product)

      } catch (error) {
        next(error)
      }


})

router.post('/',
  ValidatorHandler(createProductSchema,'body'),
  async (req,res)=>{


    const body = req.body;

    const create= await service.create(body)

    res.status(201).json(create)

})





router.patch('/:id',
ValidatorHandler(getProductSchema,'params'),
ValidatorHandler(updetaProductSchema,'body'),
async(req,res,next)=>{

  try {

    const {id} = req.params;
    const body = req.body;

    const Update =await service.updata(id,body)
    res.status(200).json(Update)

  } catch (error) {
    next(error)
  }


})

router.delete('/:id',async(req,res,next)=>{

  try {

    const {id} = req.params;

    const delete1 =await service.delete(id)
    res.status(200).json(delete1)

  } catch (error) {
    next(error)
  }
})

module.exports = router;
