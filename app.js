const express = require('express')
const app = express()
const port = 3000


// https://stackoverflow.com/questions/11181546/how-to-enable-cross-origin-resource-sharing-cors-in-the-express-js-framework-o
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', async function (req, res) {
  res.send('Hello World!')
})

app.get('/test', async function (req, res) {
  res.send('test successs')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})



// TODO: set up routing
// TODO: connect to db
