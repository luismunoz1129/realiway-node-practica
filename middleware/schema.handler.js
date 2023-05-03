const Boom = require('@hapi/boom');

function  ValidatorHandler(schema , property){

  return (req , res, next)=>{

      const data = req[property]
      const error = schema.validate(data)

      if(error){
        next(Boom.badRequest(error))
      }else{
        next()
      }

  }

}

module.exports = ValidatorHandler;
