const express = require('express')
const controller = require('../controller/controller.js')
const router = express.Router()


router.get('/questions',controller.getQuestions)
router.post('/questions',controller.insertQuestion)

router.route('/questions').get(controller.getQuestions).post(controller.insertQuestion).delete(controller.dropQuestion)

router.route('/result').get(controller.getResult).post(controller.storeResult).delete(controller.dropResult)

module.exports = router;