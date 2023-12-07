var path = require('path')

var express = require('express')
var exphbs = require ("express-handlebars")
var fs = require('fs');


var app = express()
var port = process.env.PORT || 3000

app.engine("handlebars", exphbs.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(express.static('static'))

console.log("listening on port: 3000")

app.listen(port)
