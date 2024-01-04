const  sql = require('./db_supabase_connect.js');


async function allTeas() {
  const result = await sql`SELECT * FROM tea_nodes`
  console.log(result)
  return result
}

allTeas()
