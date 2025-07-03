const express = require('express');
const morgan = require('morgan');
const app = express()
const dbConnection  = require('./config/db')
const userModel = require('./models/user')
app.set("view engine", "ejs");

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get('/', (req, res) => {
    // res.render('index')
    res.send("Hello Wolrd")
})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.get("/profile", (req, res) => {
    res.send("profile page")
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    
    const { username, email, password } = req.body

    // console.log(username, email, password)

    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password,
    })

    res.send(newUser)
})

app.get('/get-user', (req,res) => {
    // userModel.find({
    //     username: 'het'
    // }).then((users) => {
    //     res.send(users)
    // })

    userModel.findOne({
        username: 'het'
    }).then((user)=>{
        res.send(user)
    })
})

app.get('/update-user', async (req,res)=>{
    await userModel.findOneAndUpdate({
        username: 'het'
    },{
        email: 'hi@update.com'
    })

    res.send('user updated')
})


app.get('/delete-user', async (req,res) => {
    await userModel.findOneAndDelete({
        username: 'het'
    })
    
    res.send('user deleted')
})


app.post('/get-from-data', (req, res) => {
    console.log(req.body);
    res.send('data received')
})

app.listen(3000)