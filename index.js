const http = require('http')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

const express = require('express')
const app = express()

app.use(cors())

app.use(express.static('build'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/datacheck', (req, res) => {
  res.send({ data: 'test', id: 1 })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})