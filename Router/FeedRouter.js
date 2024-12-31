const {Router } = require('express')

const {getFeedBack,saveFeedBack} = require('../Controller/FeedControl')

const router = Router()

router.get('/getFeedback',getFeedBack)

router.post('/saveFeedback',saveFeedBack)

module.exports = router