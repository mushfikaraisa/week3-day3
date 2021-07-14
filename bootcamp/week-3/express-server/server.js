//import the express dependency
const express = require('express')

const app = express()
//channel for our server to listen to client requests
const port = 3000

app.use(express.static('public'))

//Server will listen to this port
app.listen(port, () => {
  console.log(`Our server is up and running on http://localhost:${port}`)
})

//touch -> to make a new file
//cd -> step into folder
//cd ../ -> step out into folder

//*** */ To start your server, node server.js //make sure you're within the level directory where your server.js file lives
//control + c // kill the server

