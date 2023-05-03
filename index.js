const express = require('express');
const routerApi = require('./routers');
const {logError,errorHandler,boomErrorHandler} = require('./middleware/error.handler')
const cors = require('cors')


const app = express ();
const port = process.env.PORT || 3977;
const whitLists = ['https://realiway-node.up.railway.app/'];
const options = {
  origin:(origin,callback)=>{
    if(whitLists.includes(origin)){
      callback(null,true);
    }else{
      callback(new Error('No permitido'))
    }
  }
}

app.use(express.json());
app.use(cors(options))

app.get('/',(req,res)=>{
    res.send('<h1> pagina inicio </h1>');
});

routerApi(app);

app.use(logError);
app.use(boomErrorHandler)
app.use(errorHandler);


app.listen(port,()=>{
  console.log('Escucando en el puerto: ' + port);
})



