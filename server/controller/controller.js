const Questions = require('../models/questionSchema.js')
const Results = require('../models/resultSchema.js')
const questions = require('../database/data.js')
const answers = require('../database/data.js')

exports.getQuestions = async function(req,res){
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({error})
    }
    // res.json("questions api get request")
}

exports.insertQuestion = async function(req,res){
    try {
        await Questions.insertMany(questions,answers).then(function(err,data){
            res.json({msg: "Data Saved Successfully...."})
        })
    } catch (error) {
        res.json({error})
    }
    // res.json("questions api post request")
}

exports.dropQuestion = async function(req,res){
    try {
        await Questions.deleteMany()
        res.json({msg:"Question deleted successfully...."})
    } catch (error) {
        res.json({error})
    }
}

exports.getResult = async function(req,res){
    try {
        const r = await Results.find()
        res.json(r)
    } catch (error) {
        res.json({error})
    }
}

exports.storeResult = async function(req,res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
        })

   } catch (error) {
        res.json({error})
   }
}

exports.dropResult = async function(req,res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}