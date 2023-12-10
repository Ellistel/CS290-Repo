var path = require('path')
var express = require('express')
var exphbs = require("express-handlebars")
var fs = require('fs')
var serverData = require("./serverData.json")
var app = express()
var port = process.env.PORT || 3000

app.engine("handlebars", exphbs.engine({ defaultLayout: false }))
app.set("view engine", "handlebars")

app.use(express.json())
app.use(express.static('static'))

app.use(function (req, res, next) {
    req.timestamp = new Date()
    next()
})

app.get("/testmain", function (req, res, next) {
    console.log("serverData", serverData)
    res.status(200).render("mainpage", {
        posts: serverData,
    })
})

app.get("/test", function (req, res, next) {
    res.status(200).render("specificblogpost", {
        posts: commentData,
    })
})

app.get("/:postnumber", function (req, res, next) {
    var number = req.params.postnumber
    var keysArray = Object.keys(serverData)
    console.log("Length:", keysArray.length)
    console.log("number", number)
    if (keysArray.length >= number) {
        var postTodisplay = serverData[number - 1]
        console.log("post to display:", postTodisplay)
        if (!(isNaN(number)) && !number.includes('.') && (parseInt(number) >= 1 && parseInt(number) <= 8)) {
            res.status(200).render("specificblogpost", {
                posts: [postTodisplay],
                comments: postTodisplay.comments,
            })
        } else {
            next()
        }
    } else
        next()
})

app.post('/:postnumber/addComment', function (req, res, next) {
    console.log(req.body)
    var number = req.params.postnumber
    var keysArray = Object.keys(serverData)
    if (number <= keysArray.length) {
        if (req.body && req.body.username && req.body.content) {
            var timestamp = req.timestamp
            timestamp = timestamp.toISOString()
            var truncatedTimestamp = timestamp.split('T')[0]
            var parts = truncatedTimestamp.split('-')
            const reformattedTimestamp = `${parts[1]}-${parts[2]}-${parts[0]}`
            serverData[number - 1].comments.push({
                username: req.body.username,
                content: req.body.content,
                timestamp: reformattedTimestamp,
            })

            fs.writeFile("./serverData.json",
                JSON.stringify(serverData, null, 2), function (err) {

                    if (err) {

                        res.status(500).send("server-side error")
                    } else {
                        res.status(200).send("Comment successfully added")
                    }

                })

        } else {

            res.status(400).send("Request needs to contain a json body with a username and content fields")
        }
    } else {
        next()
    }
})

app.get("*", function (req, res) {
    res.status(404).send("Page Not Found")
})

console.log("listening on port: 3000")
app.listen(port)