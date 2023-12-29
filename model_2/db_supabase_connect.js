const {createClient} =  "@supabase/supabase-js"
const { Pool } = require('pg');

// const supabaseUrl = env.SB_URL
// const supabaseKey = 
// const supabase = createClient(supabaseUrl, supabaseKey)
// console.log(supabase)
// module.exports = {supabase}


let client = null
async function getClient () {
  if (client) {
    return client
  }
  try {
    client = new Pool({
      supabaseUrl: env.PG_URL,
      supabaseKey: process.env.PG_KEY,
      supabase:  createClient(supabaseUrl, supabaseKey)

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


getClient()

module.exports = { query }