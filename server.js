const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, August!')
})

app.listen(3000)

module.exports = app;
