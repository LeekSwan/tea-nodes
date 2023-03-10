const express = require('express')
const app = express()
const port = 3000
const TeaService = require('./service/tea-service')
const session = require("express-session");

//pass json body through postman or pass url through json
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(session({secret: 'keyboard cat', resave: true, rolling: true, saveUninitialized: false, cookie: {expires: 5 * 60000}}))


// https://stackoverflow.com/questions/11181546/how-to-enable-cross-origin-resource-sharing-cors-in-the-express-js-framework-o
app.all('/*', function(req, res, next) {
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
  }).catch(err => {
    console.log(err)
  })
})

//show edges in frontend url 
app.get('/getalledges', async function (req, res) {
  TeaService.getAllEdges()
  .then((result) => {
    res.status(200).send({ response: result })
  }).catch(err => {
    console.log(err)
  })
})

app.post('/:addtea', async function (req, res) {
  // pass json into funtion 
  TeaService.addTea(req.body)
  //add conditional statement with errors
  //change status http code to appropriate error
  .then((result) => {
    res.status(201).send({ response: result })
  })
  .catch(err => {
    if(err.message === 'MissingValue(s)') {
      return res.status(400).send('Missing one or more values')
    }
    if(err.message === 'TeaAlreadyExists') {
      return res.status(409).send('Tea already in table')
    }
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


