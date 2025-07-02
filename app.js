const express = require('express');
const morgan = require('morgan');
const app = express()

app.set("view engine", "ejs");

app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log("This is middleware")

    return next()
})

app.get('/', (req, res, next) => {
    console.log("This is middleware");
    return next();
}, (req, res) => {
    res.render('index')
})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.get("/profile", (req, res) => {
    res.send("profile page")
})

app.listen(3000)