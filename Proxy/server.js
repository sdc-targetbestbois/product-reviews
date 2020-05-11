const express = require('express')
const app = express()

app.use(express.static(__dirname + "/dist"))


app.use(express.json())

app.listen(1001, console.log("proxy is running hot on 1001!"))