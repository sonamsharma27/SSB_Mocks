const express  = require('express')
const cors  = require('cors')
const router = require('./router/route')
const morgan = require('morgan')
const {connect} = require('./database/conn')
const { collection } = require('./models/questionSchema')
const collect = require('./models/userSchema')
const alucollect = require('./models/alumniSchema')

const app = express();

app.use(cors({origin: true,credentials: true}))
connect()
app.use(morgan('tiny'))
app.use(express.json())
// app.use(ppdtRoute)
app.use('/api',router)

app.get("/dashboard",async(req,res)=>{

})

app.post("/s_login", (req, res)=> {
    const { email, password} = req.body
    collect.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 
app.post("/alu_login", (req, res)=> {
    const { email, password} = req.body
    alucollect.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/signup", (req, res)=> {
    const { name, email, password} = req.body
    collect.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new collect({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
app.post("/alu_signup", (req, res)=> {
    const { name, email, password} = req.body
    alucollect.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new alucollect({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 



app.get('/',(req,res)=>{
    try {
        res.json("Get request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(5000,console.log('Listening on port 5000'))