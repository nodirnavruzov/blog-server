const express = require('express')
const app = express()
const path = require('path')
const config = require('./sql.config')
const DBCon = require('./sql/index')
const host = '127.0.0.1'
const port = 8080

app.use(express.json())







app.listen(port , host, () => {
  console.log(`Server has been started on http://${host}:${port}`)
})
