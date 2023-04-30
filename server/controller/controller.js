const Questions = require('../models/questionSchema.js')
const PpdtStore = require('../models/ppdtSchema.js')
const Results = require('../models/resultSchema.js')
const questions = require('../database/data.js')
const answers = require('../database/data.js')
const PpdtResponse = require('../models/ppdtResponseSchema.js')

exports.getQuestions = async function (req, res) {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
    // res.json("questions api get request")
}

exports.insertPpdtResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { username, title, story, main_character, url, total_characters, characters } = req.body;
        if (!username || !url) throw new Error('Data Not Provided...!');

        PpdtResponse.create({ 
            username: username, 
            url: url, 
            title: title, 
            main_character: 
            main_character, 
            total_characters: total_characters, 
            characters: characters, 
            story: story }, function (err, data) {
            res.json({ msg: "PPDT Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getImage = async function (req, res) {
    try {
        const url_doc = await PpdtStore.aggregate([{ $sample: { size: 1 } }])
        res.json(url_doc[0]);
    } catch (err) {
        res.json(err);
    }
}

exports.insertQuestion = async function (req, res) {
    try {
        await Questions.insertMany(questions, answers).then(function (err, data) {
            res.json({ msg: "Data Saved Successfully...." })
        })
    } catch (error) {
        res.json({ error })
    }
    // res.json("questions api post request")
}

exports.dropQuestion = async function (req, res) {
    try {
        await Questions.deleteMany()
        res.json({ msg: "Question deleted successfully...." })
    } catch (error) {
        res.json({ error })
    }
}

exports.getResult = async function (req, res) {
    try {
        const r = await Results.find()
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

exports.storeResult = async function (req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Result Saved Successfully...!" })
        })

    } catch (error) {
        res.json({ error })
    }
}

exports.dropResult = async function (req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}