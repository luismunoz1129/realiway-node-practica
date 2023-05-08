const {Pool} = require('pg')

const pool = new Pool({

  host:'localhost',
  port:5432,
  user:'luis',
  password:'luisger123',
  database:'mi_base'

})

pool.connect()

module.exports=pool;
