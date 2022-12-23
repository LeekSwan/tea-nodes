const express = require('express')
const app = express()
const port = 3000
const TeaService = require('./service/tea-service')


// https://stackoverflow.com/questions/11181546/how-to-enable-cross-origin-resource-sharing-cors-in-the-express-js-framework-o
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', async function (req, res) {
  console.log("at home!")
  res.status(200).send({ response: "Hello World" })
})

app.get('/getallteas', async function (req, res) {
  TeaService.getAllTeas()
  .then((result) => {
    res.status(200).send({ response: result })
  })
})

app.get('/getalledges', async function (req, res) {
  TeaService.getAllEdges()
  .then((result) => {
    res.status(200).send({ response: result })
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


