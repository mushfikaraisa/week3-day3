//require node-module express that we downloaded through npm install express
const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static('../public'))

app.listen(PORT, () => {
  console.log(`Your server is up and running on http://localhost:${PORT}`)
})

