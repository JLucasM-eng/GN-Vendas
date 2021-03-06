const Sequelize = require('sequelize')

const database = process.env.DATABASE;
const username = process.env.DB_USERNAME;
const passoword = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT;

const connection = new Sequelize(database,username,passoword,{
    host,
    dialect
})

module.exports = connection