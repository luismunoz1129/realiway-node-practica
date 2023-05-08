const {Sequelize} = require('sequelize');
const {config} = require('./../config/config');
const setupModels = require('./../db/models/index')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI1 = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = "postgresql://postgres:w3DT0BnI45TzdDpb4lgS@containers-us-west-5.railway.app:7309/railway";

const sequelize = new Sequelize(URI, {
  dialect:"postgres",
  logging:true
})

setupModels(sequelize);

sequelize.sync();

module.exports=sequelize;
