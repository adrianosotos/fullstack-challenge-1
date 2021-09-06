const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const fs = require('fs')
const PORT = 5000

app.use(cors())
app.use(express.json());

app.get('/products', function (req, res) {
  res.sendFile(path.join(__dirname, 'assets', 'data.json'))
})

app.get('/product/:id', function (req, res) {
  const rawData = fs.readFileSync(path.join(__dirname, 'assets', 'data.json'))
  const products = JSON.parse(rawData)
  const productId = req.params.id
  const product = products.filter((product) => product.id === productId)

  if (product.length) {
    res.status(200).send(product[0])
  } else {
    res.status(404).send({
      status: 404,
      message: 'Product not found'
    })
  }
  
})

app.get('/images/:file', function (req, res) {
  const imagePath = path.join(__dirname, 'assets', 'images', req.params.file)
  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath)
  } else {
    res.status(404).send({
      status: 404,
      message: 'Image not found'
    })
  }
})

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`)
})