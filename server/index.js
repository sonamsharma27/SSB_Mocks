const express  = require('express')
const cors  = require('cors')
const router = require('./router/route')
const morgan = require('morgan')
const {connect} = require('./database/conn')

const app = express();

app.use(cors({origin: true,credentials: true}))
connect()
app.use(morgan('tiny'))
app.use(express.json())
// app.use(ppdtRoute)
app.use('/api',router)



app.get('/',(req,res)=>{
    try {
        res.json("Get request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(5000,console.log('Listening on port 5000'))