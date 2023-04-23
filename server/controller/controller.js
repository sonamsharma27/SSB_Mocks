const Questions = require('../models/questionSchema.js')
const Results = require('../models/resultSchema.js')
const question = require('../database/data.js')
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
        await Questions.insertMany(question,answers).then(function(err,data){
            res.json({msg: "Data Saved Successfully...."})
        })
    } catch (error) {
        res.json({error})
    }
    // res.json("questions api post request")
}

exports.dropQuestion = function(req,res){
    res.json("questions api delete request")
}

exports.getResult = function(req,res){
    res.json("result api get request")
}

exports.storeResult = function(req,res){
    res.json("result api post request")
}

exports.dropResult = function(req,res){
    res.json("result api delete request")
}