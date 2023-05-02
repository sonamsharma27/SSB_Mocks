const Questions = require('../models/questionSchema.js')
const PpdtStore = require('../models/ppdtSchema.js')
const GpeStore = require('../models/gpeSchema.js')
const SrtStore = require('../models/srtSchema.js')
const Results = require('../models/resultSchema.js')
const questions = require('../database/data.js')
const answers = require('../database/data.js')
const PpdtResponse = require('../models/ppdtResponseSchema.js')
const GpeResponse = require('../models/gpeResponseSchema.js')
const SrtResponse = require('../models/srtResponseSchema.js')
exports.getQuestions = async function (req, res) {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
    // res.json("questions api get request")
}

exports.getSrtQuestion = async function (req, res) {
    try {
        const q = await SrtStore.find()
        res.json(q)
    } catch (error) {
        res.json({error})
    }
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
            main_character: main_character, 
            total_characters: total_characters, 
            characters: characters, 
            story: story }, function (err, data) {
            res.json({ msg: "PPDT Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}


exports.insertGpeResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { username,  problem, solution, url} = req.body;
        if (!username || !url) throw new Error('Data Not Provided...!');

        GpeResponse.create({ 
            username: username, 
            url: url, 
            problem: problem, 
            solution: solution
           }, function (err, data) {
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
exports.getGpeImage = async function (req, res) {
    try {
        const url_doc = await GpeStore.aggregate([{ $sample: { size: 1 } }])
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

exports.insertSrtResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { username,result} = req.body;
        if (!username) throw new Error('Data Not Provided...!');

        SrtResponse.create({ 
            username: username, 
            result: result
           }, function (err, data) {
            res.json({ msg: "Srt Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
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
