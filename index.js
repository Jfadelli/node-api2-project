const express = require('express')
const server = express()
server.use(express.json())

const port = 8000
server.listen(8000, () => console.log('server is running...'))

