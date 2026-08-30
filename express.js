const express = require('express');
const app = express()
const port = 3000

const birds = require('./birds');
app.use('/birds', birds);

// app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log('POST request received')
  res.send('POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})