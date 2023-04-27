const express = require('express')
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

router.get('/ppdt', async (req,res)=>{
    console.log('PPDT route');  
    try {
        const client = new MongoClient("mongodb://127.0.0.1:27017");
        const database = client.db("smocks_db");
        const ppdtStore = database.collection("ppdtStore");
        const totalUrls = await ppdtStore.countDocuments({});
        const id=Math.floor(Math.random() * (totalUrls+1))
        const url_doc= await ppdtStore.findOne({id: id});
        res.send(url_doc);
    }
    catch(err){
        console.log('caught an error', err);
    }
})

module.exports = router;