// what is require
// what is dotenv (I had to npm install dotenv )
// createClient is a supabase variable 

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();


// process is a node.js variable to help access .env file
// had to create the .env file, it holds keys
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)



 
async function query(text) {
  try {
    const {data, error} = await supabase.query(text)

    if (error) {
      throw error;
    }
    return data;
  } 
    
    catch (error) {
    console.error('Error executing query:', error.message);
    throw error;
  }

}







// async function nodesTable() {
//   try {
//     // Query the 'users' table
//     const { data, error } = await supabase.from('tea_nodes').select();

//     if (error) {
//       throw error;
//     }

//     // Print the data
//     console.log('Nodes:', data);
//   } catch (error) {
//     console.error('Error fetching nodes:', error.message);
//   }
// }


// async function edgesTable() {
//   try {
//     // Query the 'users' table
//     const { data, error } = await supabase.from('edges').select();

//     if (error) {
//       throw error;
//     }

//     // Print the data
//     console.log('Edges:', data);
//   } catch (error) {
//     console.error('Error fetching nodes:', error.message);
//   }
// }
// // Call the function to print the tables
// nodesTable();
// edgesTable();




module.exports = { query }

