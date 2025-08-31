const express = require('express')
const app = express()
const port = 3000
// let ejs = require('ejs');

app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  let heading1='Frontend'
  let subheading1='Backend'
  let subheading2='Development'
  let title='EJS Demo'
  let users=[{name: 'Vidhi', age: 20}, {name: 'Aarav', age: 17}, {name: 'Diya', age: 21 }];
  res.render('index', {heading1, subheading1, subheading2, users, title});
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
