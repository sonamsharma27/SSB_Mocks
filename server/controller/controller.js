const Questions = require('../models/questionSchema.js')
const NonQuestions = require('../models/nonQuestionSchema.js')
const PpdtStore = require('../models/ppdtSchema.js')
const GpeStore = require('../models/gpeSchema.js')
const SrtStore = require('../models/srtSchema.js')
const Results = require('../models/resultSchema.js')
const NonResults = require('../models/nonResultSchema.js')
const questions = require('../database/data.js')
const answers = require('../database/data.js')
const nonquestions = require('../database/nondata')
const nonanswers = require('../database/nondata.js')
const PpdtResponse = require('../models/ppdtResponseSchema.js')
const AlumniPpdtResponse = require('../models/alumniPpdtschema.js')
const AlumniWatResponse = require('../models/alumniWatschema.js')
const AlumniTatResponse = require('../models/alumniTatSchema.js')
const AlumniSrtResponse = require('../models/alumniSrtSchema.js')
const AlumniGpeResponse = require('../models/alumniGpeSchema.js')
const GpeResponse = require('../models/gpeResponseSchema.js')
const SrtResponse = require('../models/srtResponseSchema.js')
const TatStore = require('../models/tatSchema.js')
const TatResponse = require('../models/tatResponseSchema.js')
const WatStore = require('../models/watSchema.js')
const WatResponse = require('../models/watResponseSchema.js')
const srtFeedback = require('../models/srtFeedback.js')
const axios = require('axios');
exports.getQuestions = async function (req, res) {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
    // res.json("questions api get request")
}

exports.insertSrtFeedback = async function(req,res){
    try {
        console.log(req.body);
        const { feedback} = req.body;
        if (!feedback) throw new Error('Data Not Provided...!');

        srtFeedback.create({ 
            feedback: feedback, 
            
        }, function (err, data) {
            res.json({ msg: "Srt Feddback Saved Successfully...!" })
        })
    } catch (error){
        res.json({ error});
    }
}

exports.getNonQuestions = async function(req,res){
    try {
        const q = await NonQuestions.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getSrtResponses = async function(req,res){
    try {
        const q = await SrtResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getPpdtResponses = async function(req,res){
    try {
        const q = await PpdtResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
exports.getGpeResponses = async function(req,res){
    try {
        const q = await GpeResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getWatResponses = async function(req,res){
    try {
        const q = await WatResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getTatResponses = async function(req,res){
    try {
        const q = await TatResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
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

exports.insertTatResponse = async function (req,res) {
    try {
        console.log(req.body);
        const { username, url1, s1, url2, s2,url3, s3,url4, s4,url5, s5,url6, s6,url7, s7,url8, s8,url9, s9,url10, s10} = req.body;
        if (!username) throw new Error('Data Not Provided...!');

        TatResponse.create({ 
            username: username, 
            url1: url1,
            s1: s1,
            url2: url2,
            s2: s2,
            url3: url3,
            s3: s3,
            url4: url4,
            s4: s4,
            url5: url5,
            s5: s5,
            url6: url6,
            s6: s6,
            url7: url7,
            s7: s7,
            url8: url8,
            s8: s8,
            url9: url9,
            s9:s9,
            url10: url10,
            s10: s10
        }, function (err, data) {
            res.json({ msg: "Tat Repsonse Saved Successfully...!" })
        })
    } catch (error){
        res.json({ error});
    }
}

exports.insertWatResponse = async function (req,res) {
    try {
        console.log(req.body);
        const { username, word1, s1, word2, s2,word3, s3,word4, s4,word5, s5,word6, s6,word7, s7,word8, s8,word9, s9,word10, s10} = req.body;
        if (!username) throw new Error('Data Not Provided...!');

        WatResponse.create({ 
            username: username, 
            word1: word1,
            word2: word2,
            word3: word3,
            word4: word4,
            word5: word5,
            word6: word6,
            word7: word7,
            word8: word8,
            word9: word9,
            word10: word10,
            s1: s1,
            s2: s2,
            s3: s3,
            s4: s4,
            s5: s5,
            s6: s6,
            s7: s7,
            s8: s8,
            s9: s9,
            s10: s10,
        }, function (err, data) {
            res.json({ msg: "Wat Repsonse Saved Successfully...!" })
        })
    } catch (error){
        res.json({ error});
    }
}


exports.insertAlumniPpdtResponse = async function(req,res){
    try {
        console.log(req.body);
        const {url} = req.body
        if(!url) throw new Error('Data Not Provided...!');

        AlumniPpdtResponse.create({
            url: url
        }, function (err, data) {
            res.json({ msg: "Alumni PPDT Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getAlumniPpdtResponse = async function(req,res){
    try {
        const q = await AlumniPpdtResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.insertAlumniWatResponse = async function(req,res){
    try {
        console.log(req.body);
        const {content} = req.body
        if(!content) throw new Error('Data Not Provided...!');

        AlumniWatResponse.create({
            content: content
        }, function (err, data) {
            res.json({ msg: "Alumni Wat Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getAlumniWatResponse = async function(req,res){
    try {
        const q = await AlumniWatResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.insertAlumniTatResponse = async function(req,res){
    try {
        console.log(req.body);
        const {url} = req.body
        if(!url) throw new Error('Data Not Provided...!');

        AlumniTatResponse.create({
            url: url
        }, function (err, data) {
            res.json({ msg: "Alumni Tat Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getAlumniTatResponse = async function(req,res){
    try {
        const q = await AlumniTatResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.insertAlumniSrtResponse = async function(req,res){
    try {
        console.log(req.body);
        const {situation} = req.body
        if(!situation) throw new Error('Data Not Provided...!');

        AlumniSrtResponse.create({
            situation: situation
        }, function (err, data) {
            res.json({ msg: "Alumni Srt Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getAlumniSrtResponse = async function(req,res){
    try {
        const q = await AlumniSrtResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.insertAlumniGpeResponse = async function(req,res){
    try {
        console.log(req.body);
        const {url,problem} = req.body
        if(!url) throw new Error('Data Not Provided...!');

        AlumniGpeResponse.create({
            url: url,
            problem: problem
        }, function (err, data) {
            res.json({ msg: "Alumni Gpe Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getAlumniGpeResponse = async function(req,res){
    try {
        const q = await AlumniGpeResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.insertGpeResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { username,  problem, solution, url} = req.body;
        if (!username ) throw new Error('Data Not Provided...!');

        GpeResponse.create({ 
            username: username, 
            url: url, 
            problem: problem, 
            solution: solution
           }, function (err, data) {
            res.json({ msg: "Gpe Repsonse Saved Successfully...!" })
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

exports.getTatImages = async function (req,res) {
    try {
        const url_doc = await TatStore.aggregate([{ $sample: {size: 10} }] );
        res.json(url_doc);
    } catch (err) {
        res.json(err);
    }
}

exports.getWatWords = async function (req,res) {
    try {
        const word_doc = await WatStore.aggregate([{ $sample: {size: 10} }] );
        res.json(word_doc);
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

exports.insertNonQuestion = async function (req, res) {
    try {
        await NonQuestions.insertMany(nonquestions, nonanswers).then(function (err, data) {
            res.json({ msg: "Non Data Saved Successfully...." })
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
exports.dropNonQuestion = async function (req, res) {
    try {
        await NonQuestions.deleteMany()
        res.json({ msg: "Non Question deleted successfully...." })
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
exports.getNonResult = async function (req, res) {
    try {
        const r = await NonResults.find()
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
            res.json({ msg: "Non Result Saved Successfully...!" })
        })

    } catch (error) {
        res.json({ error })
    }
}
exports.storeNonResult = async function (req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username && !result) throw new Error('Data Not Provided...!');

        NonResults.create({ username, result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Non Result Saved Successfully...!" })
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
exports.dropNonResult = async function (req, res) {
    try {
        await NonResults.deleteMany();
        res.json({ msg: "Non Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}

exports.personalityDetection = async function (req,res) {
    const options = {
        method: 'POST',
        url: 'https://personality-traits.p.rapidapi.com/personality',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
          'X-RapidAPI-Key': 'cc16c628e5msh335b79c5c758c18p132a42jsn500fcc56dc0b',
          'X-RapidAPI-Host': 'personality-traits.p.rapidapi.com'
        },
        data: [
          {
            id: '1',
            language: 'en',
            text: 'I love the service'
          }
        ]
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          res.json(response.data);
      } catch (error) {
          console.error(error);
          res.json({ error })
      }
}