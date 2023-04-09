const express  = require('express')
const cors  = require('cors')
const app = express();
const connectDB = require('./config/db')
const ppdtRoute = require('./routes/ppdt')
app.use(cors({origin: true,credentials: true}))
connectDB();

app.use(ppdtRoute)
app.get('/',(req,res)=>{
    res.send("Home route")
})

app.listen(5000,console.log('Listening on port 5000'))