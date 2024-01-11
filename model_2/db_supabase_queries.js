const  sql = require('./db_supabase_connect.js');


async function get_all_tea_nodes() {
  const result = await sql`SELECT * FROM tea_nodes`
  return result
}


async function get_all_edges() {
  const getAllEdges = await sql`SELECT * FROM edges`
  console.log(getAllEdges)
  return getAllEdges
}


async function do_tea_be_there(teaname) {
  try{
    const checkExist =  await sql`
    SELECT EXISTS(SELECT 1 FROM tea_nodes WHERE tea_name = ${teaname})`
    // console.log(JSON.stringify(checkExist) === 'true')
    return JSON.stringify(checkExist) === 'true'
    }
    catch(err){
      console.log(err.message)
  }
}

  //add tea to database
  async function add_tea (tea_name, tea_link, tea_location, tea_description) {
    try{
      const addTea = await sql`INSERT INTO tea_nodes (tea_name, tea_link, tea_location, tea_description) VALUES(${tea_name}, ${tea_link}, ${tea_location}, ${tea_description})`
      console.log(addTea)
      return addTea

    }
    catch(err){
      console.log(err.message)
    }
  }

  //write a funciton to add edges
  async function delete_tea(teaID){
    const removeTea = await sql`DELETE FROM tea_nodes WHERE id = ${teaID}`
    console.log(delete_tea)
    return delete_tea
  }




  module.exports = {get_all_tea_nodes, delete_tea, add_tea, get_all_edges, do_tea_be_there}

