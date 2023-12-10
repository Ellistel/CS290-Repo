var path = require('path')

var express = require('express')
var exphbs = require ("express-handlebars")
var fs = require('fs');
const e = require('express');
serverData = require("./serverData.json")


var app = express()
var port = process.env.PORT || 3000

app.engine("handlebars", exphbs.engine({defaultLayout: false}))
app.set("view engine", "handlebars")

app.use(express.static('static'))


app.get("/testmain", function(req,res,next)
{
    console.log("serverData", serverData)
    res.status(200).render("mainpage", {
        
        posts: serverData,
        
    })
})



app.get("/test", function(req,res,next)
{ 
    res.status(200).render("specificblogpost", {
        posts: commentData,
        
    })
})

app.get("/:postnumber", function(req,res,next)
{ 

    var number = req.params.postnumber
    var keysArray = Object.keys(serverData)
    console.log("Length:", keysArray.length)
    console.log("number", number)
    if(keysArray.length >= number )
    {
    var postTodisplay = serverData[number - 1]
    console.log("post to display:", postTodisplay)
     if(!(isNaN(number)) && !number.includes('.') &&  (parseInt(number) >= 1 && parseInt(number) <= 8) )
    {
    res.status(200).render("specificblogpost", {
        
        posts: [postTodisplay],
        comments: postTodisplay.comments
       
    })

 }
}
else
next()
})

app.get("*", function(req,res)
{

    res.status(404).send("Page Not Found")

})






console.log("listening on port: 3000")

app.listen(port)
