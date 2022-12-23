const { Pool } = require('pg');

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
            user: 'rabidrabbit',
            host: 'db.bit.io',
            database: 'rabidrabbit/tea-db', // public database 
            password: 'v2_3x7yt_YRZX48KNswH4Uq8jLADWKee', // key from bit.io database page connect menu
            port: 5432,
            ssl: true,
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