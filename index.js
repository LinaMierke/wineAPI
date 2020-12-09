const express = require('express')
const app = express ()
const cors = require("cors");
const parser = require("body-parser");
const cookieParser = require('cookie-parser');
const passport = require('passport')
const passportlocal = require('passport-local').Strategy
const session = require('express-session')
const bcrypt = require('bcryptjs')
const User = require("./lib/models/user");
const mongoose = require("mongoose")
const {deserializeUser} = require("passport")

mongoose.connect(
    "mongodb+srv://wineoclock:123@cluster0.0dzdb.mongodb.net/<dbname>?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true  
    },
    () => {
        console.log("connected to mongoose")
    }
)

//middleware
app.use(express.json())
app.use(parser.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(parser.urlencoded({ extended: true}))
app.use(
   session({
       secret: "teo",
       resave: true,
       saveUninitialized : true,
   }) 
)
app.use(cookieParser("teo"))
app.use(passport.initialize())
app.use(passport.session())
require("./passportConfig")(passport)

//authentication routes
app.post("/users/login", (req, res, next) => {
    
    passport.authenticate("local", (err, user, info) => {
        console.log("we are here!")
        if (err) throw err
        if (!user) res.send("User doesn't exist")
        else {
            req.login(user, err => {
                if (err) throw err
                res.send("Authentication completed")
                console.log(req.user)
            })
        }
    })(req, res, next)
})

// app.post("/users/login", (req, res, next) => {
    
//     passport.authenticate("local", (err, user, info) => {
//         console.log("we are here!")
//         if (err) throw err
//         if (!user) res.send("User doesn't exist")
//         else {
//             req.login(user, err => {
//                 if (err) throw err
//                 res.send("Authentication completed")
//                 console.log(req.user)
//             })
//         }
//     })(req, res, next)
// })

app.post("/users/register", (req, res) => {
   User.findOne({ username: req.body.username }, async (err, doc) => { 
        if (err) throw err
        if (doc) res.send("User already exist")
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            newUser = new User ({
                username: req.body.username,
                password: hashedPassword
            })
            newUser.save()
            res.send("User created")
        }
   })
})

var cors = require('cors');
app.use(cors())


app.get("/users/getuser", (req, res) => res.send(req.user))

app.use(require("./lib/routes/index"))
app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), () => console.log('listening on port 3000'))
