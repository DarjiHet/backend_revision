const express = require('express');
const morgan = require('morgan');
const app = express()

app.set("view engine", "ejs");

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('index')
})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.get("/profile", (req, res) => {
    res.send("profile page")
})

app.post('/get-from-data', (req, res) => {
    console.log(req.body);
    res.send('data received')
})

app.listen(3000)