const express = require('express')
const app = express()

app.use(express.static(__dirname + "/dist"))


/* TODO:

*/

app.use(express.json())

app.get('/', function (req, res) {
  res.send('res send')
})

app.listen(8080, console.log("app is running hot on 8080!"))