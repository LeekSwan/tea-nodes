//import postgres from 'postgres'
const postgres = require('postgres')
//import dotenv from dotenv and add .config()
const dotenv = require('dotenv').config()

//supabase connection documentation using postgress
// const connectionString = process.env.DATABASE_URL
const connectionString = 'postgresql://postgres:dF0l9VswSfXVTJWa@db.uxdewfguxmwbfkgnegst.supabase.co:5432/postgres'
const sql = postgres(connectionString)


async function dbquery (info){
  console.log(info)
  const client = await sql`${info}`
  console.log(client)
  return client
}

dbquery('SELECT * FROM tea_nodes')

// async function get_all_tea_nodes() {
//   const result = await dbquery('SELECT * FROM tea_nodes')
//   console.log(result)
//   return result
// }

// get_all_tea_nodes()

module.exports = {dbquery};

















// // what is require
// // what is dotenv (I had to npm install dotenv )
// // createClient is a supabase variable 

// const { createClient } = require('@supabase/supabase-js');
// require('dotenv').config();


// // process is a node.js variable to help access .env file
// // had to create the .env file, it holds keys
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey)


// // async function nodesTable() {
// //   try {
// //     // Query the 'users' table
// //     const { data, error } = await supabase.from('tea_nodes').select();

// //     if (error) {
// //       throw error;
// //     }

// //     // Print the data
// //     console.log('Nodes:', data);
// //   } catch (error) {
// //     console.error('Error fetching nodes:', error.message);
// //   }
// // }


// // async function edgesTable() {
// //   try {
// //     // Query the 'users' table
// //     const { data, error } = await supabase.from('edges').select();

// //     if (error) {
// //       throw error;
// //     }

// //     // Print the data
// //     console.log('Edges:', data);
// //   } catch (error) {
// //     console.error('Error fetching nodes:', error.message);
// //   }
// // }
// // // Call the function to print the tables
// // nodesTable();
// // edgesTable();


