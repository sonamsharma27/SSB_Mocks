const express = require('express')
const router = express.Router();

router.get('/ppdt',(req,res)=>{
    console.log('PPDT route');
    res.send('Response from ppdt route')
})

module.exports = router;