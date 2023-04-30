const express = require('express')
const controller = require('../controller/controller.js')
const router = express.Router()


router.get('/questions',controller.getQuestions)
router.get('/ppdt',controller.getImage)
router.post('/questions',controller.insertQuestion)
router.post('/ppdt_resp',controller.insertPpdtResponse)
router.route('/questions').get(controller.getQuestions).post(controller.insertQuestion).delete(controller.dropQuestion)

router.route('/result').get(controller.getResult).post(controller.storeResult).delete(controller.dropResult)
module.exports = router;