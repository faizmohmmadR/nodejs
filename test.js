const express = require('express');

const app = express();

const {Sequelize,DataTypes } = require('sequelize')


const sequelize = new Sequelize('milko','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

async function connection(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been establishid successfully.");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
} 

connection()
const port = process.env.PORT || 300

app.listen(port,()=>{
    console.log(`lestening on port ${port}`)
})