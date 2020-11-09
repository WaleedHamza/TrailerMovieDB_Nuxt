const path = require('path')
const express = require('express')
const serverStatic = require('server-static')

const app = express()

app.use('/', serverStatic(path.join(__dirname), '/dist'))

const port = process.env.PORT || 8080

app.listen(port)
