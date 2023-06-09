const express = require('express');
const routerApi = require('./routers');
const {logError,errorHandler,boomErrorHandler,handlerSQLError} = require('./middleware/error.handler')
const cors = require('cors')


const app = express ();
const port = process.env.PORT || 3000;
const whitLists = ['https://realiway-node.up.railway.app','http://127.0.0.1:5501','http://localhost:3977'];
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
app.use(cors())

app.get('/',(req,res)=>{
    res.send('<h1> pagina inicio </h1>');
});

routerApi(app);

app.use(logError);
app.use(handlerSQLError);
app.use(boomErrorHandler)
app.use(errorHandler);


app.listen(port,()=>{
  console.log('Escucando en el puerto: ' + port);
})



