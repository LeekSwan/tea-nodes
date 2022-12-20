const express = require('express')
const app = express()
const port = 3000
// const { Queries } = require('./db_queries')
const { get_all_tea_nodes } = require('./db_queries')


// https://stackoverflow.com/questions/11181546/how-to-enable-cross-origin-resource-sharing-cors-in-the-express-js-framework-o
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', async function (req, res) {
  console.log("at home!")
  res.send('Hello World!')
})

app.get('/getallteanodes', async function (req, res) {
  console.log('here!')
  res.send('getallteanodees returns:' + get_all_tea_nodes())
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})



// TODO: set up routing
