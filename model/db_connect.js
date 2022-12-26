const { Pool } = require('pg');
require('dotenv').config();

let client = null
// Returns a Promise for a connected PG Client instance
// If no client exists, it creates one
// Otherwise, returns existing client (cached)
// NOTE: Be sure to await or .then(), else you will be very confused
async function getClient () {
  if (client) {
    return client
  }
  try {
    client = new Pool({
            user: process.env.PG_USERNAME,
            host: process.env.PG_HOSTNAME,
            database: process.env.PG_DATABASE, // public database 
            password: process.env.PG_PASSWORD, // key from bit.io database page connect menu
            port: process.env.PG_PORT,
            ssl: process.env.PG_SSL,
        });
    await client.connect()
    return client
  } catch (err) {
    console.log('Error when connecting to PG:')
    console.log(err.message)
    return null
  }
}

async function query (text) {
    const client = await getClient()
    return client.query(text)
  }

module.exports = { query }