var path = require('path')

var express = require('express')
var exphbs = require ("express-handlebars")
var fs = require('fs');
var commentData = require("./commentData.json")


var app = express()
var port = process.env.PORT || 3000

app.engine("handlebars", exphbs.engine({defaultLayout: false}))
app.set("view engine", "handlebars")

app.use(express.static('static'))






app.get("/test", function(req,res,next)
{
    res.status(200).render("specificblogpost", {
        posts: commentData,
        
    })
})





console.log("listening on port: 3000")

app.listen(port)
