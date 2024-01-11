//import postgres from 'postgres'
const postgres = require('postgres')
//import dotenv from dotenv and add .config()
const dotenv = require('dotenv').config()

//supabase connection documentation using postgress
const connectionString = process.env.DATABASE_URL
// const connectionString = 'postgresql://postgres:dF0l9VswSfXVTJWa@db.uxdewfguxmwbfkgnegst.supabase.co:5432/postgres'
const sql = postgres(connectionString)

module.exports = sql
