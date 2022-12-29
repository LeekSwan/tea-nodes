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

//show edges in frontend url 
app.get('/getalledges', async function (req, res) {
  TeaService.getAllEdges()
  .then((result) => {
    res.status(200).send({ response: result })
  })
})


// deletes a specifit tea and edge given its primary key passed fron frontend
app.delete('/:teaId', async function (req, res) {
  TeaService.deleteTea(req.params.teaId)
  .then(() => {
    res.status(200).send()
  })
  .catch(err => {
    if (err.message === 'teaNotFound') {
      return res.status(404).send('Tea not found')
    }
    if (err.message === 'cannotDeleteRootTea') {
      return res.status(405).send('Cannot delete root tea')
    }
    console.log(err)
    return res.status(500).json(err)
  })

})




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


