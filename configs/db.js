const { Client } = require('pg')
const conString = process.env.DB_URL; //Can be found in the Details page
const client = new Client(conString);
module.exports=client; 
