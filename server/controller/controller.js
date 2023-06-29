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
const watFeedback = require('../models/watFeedback.js')
const tatFeedback = require('../models/tatFeedback.js')
const ppdtFeedbackStore = require('../models/ppdtFeedbackStore.js')
const gpeFeedbackStore = require('../models/gpeFeedbackStore.js')
const axios = require('axios');
const mongoose = require('mongoose');

exports.insertPpdtFeedbackstore = async function (req, res) {
    try {
        console.log(req.body);
        const { feedback, story, url } = req.body;
        if (!feedback || !url || !story) throw new Error('Data Not Provided...!');

        ppdtFeedbackStore.create({
            story: story,
            url: url,
            feedback: feedback,
        }, function (err, data) {
            res.json({ msg: "ppdt Feddback Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error });
    }
}

exports.insertGpeFeedbackstore = async function (req, res) {
    try {
        console.log(req.body);
        const { problem, url, result, feedback } = req.body;
        if (!problem || !url || !result || !feedback) throw new Error('Data Not Provided...!');

        gpeFeedbackStore.create({
            problem: problem,
            url: url,
            result: result,
            feedback: feedback,
        }, function (err, data) {
            res.json({ msg: "gpe Feddback Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error });
    }
}

exports.getPpdtFeedback = async function (req, res) {
    try {
        const q = await ppdtFeedbackStore.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
exports.getSrtFeedback = async function (req, res) {
    try {
        const q = await srtFeedback.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getGpeFeedback = async function (req, res) {
    try {
        const q = await gpeFeedbackStore.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
exports.getQuestions = async function (req, res) {
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
    // res.json("questions api get request")
}

exports.insertSrtFeedback = async function (req, res) {
    try {
        console.log(req.body);
        const { username, result, alumniname, feedback, situation } = req.body;
        if (!username || !result || !alumniname || !feedback || !situation) throw new Error('Data Not Provided...!');

        srtFeedback.create({
            username: username,
            result: result,
            alumniname: alumniname,
            feedback: feedback,
            situation: situation,

        }, function (err, data) {
            res.json({ msg: "Srt Feddback Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error });
    }
}

exports.insertWatFeedback = async function (req, res) {
    try {
        console.log(req.body);
        const { word1, s1, word2, s2, word3, s3, word4, s4, word5, s5, word6, s6, word7, s7, word8, s8, word9, s9, word10, s10, alumniname, feedback, username } = req.body;
        if (!alumniname || !feedback) throw new Error('Data Not Provided...!');

        watFeedback.create({
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
            alumniname: alumniname,
            feedback: feedback,
            username: username
        }, function (err, data) {
            res.json({ msg: "Wat Feddback Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error });
    }
}

exports.insertTatFeedback = async function (req, res) {
    try {
        console.log(req.body);
        const { url1, s1, url2, s2, url3, s3, url4, s4, url5, s5, url6, s6, url7, s7, url8, s8, url9, s9, url10, s10, alumniname, feedback, username } = req.body;
        if (!alumniname || !feedback) throw new Error('Data Not Provided...!');

        tatFeedback.create({
            url1: url1,
            url2: url2,
            url3: url3,
            url4: url4,
            url5: url5,
            url6: url6,
            url7: url7,
            url8: url8,
            url9: url9,
            url10: url10,
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
            alumniname: alumniname,
            feedback: feedback,
            username: username
        }, function (err, data) {
            res.json({ msg: "Tat Feddback Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error });
    }
}
exports.getWatFeedback = async function (req, res) {
    try {
        const q = await watFeedback.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getTatFeedback = async function (req, res) {
    try {
        const q = await tatFeedback.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}


exports.getNonQuestions = async function (req, res) {
    try {
        const q = await NonQuestions.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getSrtResponses = async function (req, res) {
    try {
        const q = await SrtResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getPpdtResponses = async function (req, res) {
    try {
        const q = await PpdtResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
exports.getGpeResponses = async function (req, res) {
    try {
        const q = await GpeResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getWatResponses = async function (req, res) {
    try {
        const q = await WatResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.getTatResponses = async function (req, res) {
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
        res.json({ error })
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
            story: story
        }, function (err, data) {
            res.json({ msg: "PPDT Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.insertTatResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { username, url1, s1, url2, s2, url3, s3, url4, s4, url5, s5, url6, s6, url7, s7, url8, s8, url9, s9, url10, s10 } = req.body;
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
            s9: s9,
            url10: url10,
            s10: s10
        }, function (err, data) {
            res.json({ msg: "Tat Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error });
    }
}

exports.insertWatResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { username, word1, s1, word2, s2, word3, s3, word4, s4, word5, s5, word6, s6, word7, s7, word8, s8, word9, s9, word10, s10 } = req.body;
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
    } catch (error) {
        res.json({ error });
    }
}


exports.insertAlumniPpdtResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { url } = req.body
        if (!url) throw new Error('Data Not Provided...!');

        AlumniPpdtResponse.create({
            url: url
        }, function (err, data) {
            res.json({ msg: "Alumni PPDT Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getAlumniPpdtResponse = async function (req, res) {
    try {
        const q = await AlumniPpdtResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.insertAlumniWatResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { content } = req.body
        if (!content) throw new Error('Data Not Provided...!');

        AlumniWatResponse.create({
            content: content
        }, function (err, data) {
            res.json({ msg: "Alumni Wat Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getAlumniWatResponse = async function (req, res) {
    try {
        const q = await AlumniWatResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.insertAlumniTatResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { url } = req.body
        if (!url) throw new Error('Data Not Provided...!');

        AlumniTatResponse.create({
            url: url
        }, function (err, data) {
            res.json({ msg: "Alumni Tat Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getAlumniTatResponse = async function (req, res) {
    try {
        const q = await AlumniTatResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.insertAlumniSrtResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { situation } = req.body
        if (!situation) throw new Error('Data Not Provided...!');

        AlumniSrtResponse.create({
            situation: situation
        }, function (err, data) {
            res.json({ msg: "Alumni Srt Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.getAlumniSrtResponse = async function (req, res) {
    try {
        const q = await AlumniSrtResponse.find()
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

exports.insertAlumniGpeResponse = async function (req, res) {
    try {
        console.log(req.body);
        const { url, problem } = req.body
        if (!url) throw new Error('Data Not Provided...!');

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

exports.getAlumniGpeResponse = async function (req, res) {
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
        const { username, problem, solution, url } = req.body;
        if (!username) throw new Error('Data Not Provided...!');

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

exports.fetchPpdtResponseById = async function (req, res) {
    const { oid, email, rating } = req.body;
    try {
        const resp = await PpdtResponse.findOne({ _id: oid });
        console.log(resp);
        let hasRated = false;
        resp.users.forEach((user) => {
            if (user.email === email) {
                console.log('existing rating');
                hasRated = true;
                res.json({ errmsg: 'You have already rated this response' });
            }
        });

        if (!hasRated) {
            PpdtResponse.findByIdAndUpdate(
                oid,
                { $push: { users: { email: email, rating: rating } } },
                function (err, docs) {
                    if (err) {
                        console.log(err);
                        res.json({ errmsg: 'Unable to add rating' });
                    } else {
                        console.log(docs);
                        res.json({ msg: 'Rating added successfully' });
                    }
                }
            );
        }
    } catch (err) {
        res.json(err);
    }
};
exports.fetchTatResponseById = async function (req, res) {
    const { oid, email, rating } = req.body;
    try {
        const resp = await TatResponse.findOne({ _id: oid });
        console.log(resp);
        let hasRated = false;
        resp.users.forEach((user) => {
            if (user.email === email) {
                console.log('existing rating');
                hasRated = true;
                res.json({ errmsg: 'You have already rated this response' });
            }
        });

        if (!hasRated) {
            TatResponse.findByIdAndUpdate(
                oid,
                { $push: { users: { email: email, rating: rating } } },
                function (err, docs) {
                    if (err) {
                        console.log(err);
                        res.json({ errmsg: 'Unable to add rating' });
                    } else {
                        console.log(docs);
                        res.json({ msg: 'Rating added successfully' });
                    }
                }
            );
        }
    } catch (err) {
        res.json(err);
    }
};
exports.fetchWatResponseById = async function (req, res) {
    const { oid, email, rating } = req.body;
    try {
        const resp = await WatResponse.findOne({ _id: oid });
        console.log(resp);
        let hasRated = false;
        resp.users.forEach((user) => {
            if (user.email === email) {
                console.log('existing rating');
                hasRated = true;
                res.json({ errmsg: 'You have already rated this response' });
            }
        });

        if (!hasRated) {
            WatResponse.findByIdAndUpdate(
                oid,
                { $push: { users: { email: email, rating: rating } } },
                function (err, docs) {
                    if (err) {
                        console.log(err);
                        res.json({ errmsg: 'Unable to add rating' });
                    } else {
                        console.log(docs);
                        res.json({ msg: 'Rating added successfully' });
                    }
                }
            );
        }
    } catch (err) {
        res.json(err);
    }
};
exports.fetchGpeResponseById = async function (req, res) {
    const { oid, email, rating } = req.body;
    try {
        const resp = await GpeResponse.findOne({ _id: oid });
        console.log(resp);
        let hasRated = false;
        resp.users.forEach((user) => {
            if (user.email === email) {
                console.log('existing rating');
                hasRated = true;
                res.json({ errmsg: 'You have already rated this response' });
            }
        });

        if (!hasRated) {
            GpeResponse.findByIdAndUpdate(
                oid,
                { $push: { users: { email: email, rating: rating } } },
                function (err, docs) {
                    if (err) {
                        console.log(err);
                        res.json({ errmsg: 'Unable to add rating' });
                    } else {
                        console.log(docs);
                        res.json({ msg: 'Rating added successfully' });
                    }
                }
            );
        }
    } catch (err) {
        res.json(err);
    }
};
exports.fetchSrtResponseById = async function (req, res) {
    const { oid, email, rating } = req.body;
    try {
        const resp = await SrtResponse.findOne({ _id: oid });
        console.log(resp);
        let hasRated = false;
        resp.users.forEach((user) => {
            if (user.email === email) {
                console.log('existing rating');
                hasRated = true;
                res.json({ errmsg: 'You have already rated this response' });
            }
        });

        if (!hasRated) {
            SrtResponse.findByIdAndUpdate(
                oid,
                { $push: { users: { email: email, rating: rating } } },
                function (err, docs) {
                    if (err) {
                        console.log(err);
                        res.json({ errmsg: 'Unable to add rating' });
                    } else {
                        console.log(docs);
                        res.json({ msg: 'Rating added successfully' });
                    }
                }
            );
        }
    } catch (err) {
        res.json(err);
    }
};


exports.getTatImages = async function (req, res) {
    try {
        const url_doc = await TatStore.aggregate([{ $sample: { size: 10 } }]);
        res.json(url_doc);
    } catch (err) {
        res.json(err);
    }
}

exports.getWatWords = async function (req, res) {
    try {
        const word_doc = await WatStore.aggregate([{ $sample: { size: 10 } }]);
        res.json(word_doc);
    } catch (err) {
        res.json(err);
    }
}

exports.insertWatWords = async function (req, res) {
    try {
        console.log(req.body);
        const { word } = req.body;
        if (!word) throw new Error('Data Not Provided...!');

        WatStore.create({
            word: word
        }, function (err, data) {
            res.json({ msg: "Wat Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}
exports.insertSrtSituation = async function (req, res) {
    try {
        console.log(req.body);
        const { situation } = req.body;
        if (!situation) throw new Error('Data Not Provided...!');

        SrtStore.create({
            situation: situation
        }, function (err, data) {
            res.json({ msg: "Srt Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.insertTatUrl = async function (req, res) {
    try {
        console.log(req.body);
        const { taturl } = req.body;
        if (!taturl) throw new Error('Data Not Provided...!');

        TatStore.create({
            url: taturl
        }, function (err, data) {
            res.json({ msg: "Tat Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}
exports.insertPpdtUrl = async function (req, res) {
    try {
        console.log(req.body);
        const { ppdturl } = req.body;
        if (!ppdturl) throw new Error('Data Not Provided...!');

        PpdtStore.create({
            ppdturl: ppdturl
        }, function (err, data) {
            res.json({ msg: "Ppdt Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}
exports.insertGpeProblem = async function (req, res) {
    try {
        console.log(req.body);
        const { gpeurl, gpeproblem } = req.body;
        if (!gpeurl || !gpeproblem) throw new Error('Data Not Provided...!');

        GpeStore.create({
            gpeurl: gpeurl,
            gpeproblem: gpeproblem
        }, function (err, data) {
            res.json({ msg: "Gpe Repsonse Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

exports.dropWatWords = async function (req, res) {
    try {
        const { word } = req.body;
        console.log("reqbody", word);
        await AlumniWatResponse.deleteOne({ "content": word });
        res.json({ msg: "word deleted successfully...." })
    } catch (error) {
        res.json({ error })
    }
}

exports.dropPpdtUrl = async function (req, res) {
    try {
        const { ppdturl } = req.body;
        console.log("reqbody", ppdturl);
        await AlumniPpdtResponse.deleteOne({ "content": ppdturl });
        res.json({ msg: "url deleted successfully...." })
    } catch (error) {
        res.json({ error })
    }
}

exports.dropSrtSituation = async function (req, res) {
    try {
        const { situation } = req.body;
        console.log("reqbody", situation);
        await AlumniSrtResponse.deleteOne({ "content": situation });
        res.json({ msg: "situation deleted successfully...." })
    } catch (error) {
        res.json({ error })
    }
}
exports.dropGpeProblem = async function (req, res) {
    try {
        const { url, problem } = req.body;
        console.log("reqbody", url);
        console.log("reqbody2", problem);
        await AlumniGpeResponse.deleteMany();
        res.json({ msg: "situation deleted successfully...." })
    } catch (error) {
        res.json({ error })
    }
}

exports.dropTatUrl = async function (req, res) {
    try {
        const { taturl } = req.body;
        console.log("reqbody", taturl);
        await AlumniSrtResponse.deleteOne({ "content": taturl });
        res.json({ msg: "url deleted successfully...." })
    } catch (error) {
        res.json({ error })
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
        const { username, result, questions } = req.body;
        if (!username || !result) throw new Error('Data Not Provided...!');

        SrtResponse.create({
            username: username,
            result: result,
            questions: questions
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
        const { username } = req.body;
        // const r = await Results.find({"username": username})
        const r = await Results.find();
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

exports.personalityDetection = async function (req, res) {
    const { personality_detection_string } = req.body;
    const options = {
        method: 'POST',
        url: 'https://big-five-personality-insights.p.rapidapi.com/api/big5',
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
            'X-RapidAPI-Key': '5f696d5cf6msh10aeac54f573da1p1db039jsn54b5361ebdb5',
            'X-RapidAPI-Host': 'big-five-personality-insights.p.rapidapi.com'
        },
        data: [
            {
                id: '1',
                language: 'en',
                text: personality_detection_string
            }
        ]
    };

    try {
        const response = await axios.request(options);
        console.log(response);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.json({ error })
    }
}