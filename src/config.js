const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  auth = require('./routes/auth.js'),
  cards = require('./routes/cards.js'),
  cors = require('cors')

app.use(cors({exposedHeaders: ['Content-Length', 'Authorization']}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
  
app.use('/cards', cards)
app.use('/auth', auth)
  
module.exports = app