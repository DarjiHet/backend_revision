const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.get("/profile", (req, res) => {
    res.send("profile page")
})

app.listen(3000)