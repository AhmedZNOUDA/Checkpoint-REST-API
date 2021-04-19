const express = require('express')
const mongoose = require('mongoose')

const app =express()

app.use(express.json())

//DB Config
const db = require('./config/env').URI

//Connect DB
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err))

//Use Route
app.use('/api/contact', require('./routes/api/contact'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))