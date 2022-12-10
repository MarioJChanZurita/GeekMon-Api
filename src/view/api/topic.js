const express = require('express')
const router = express.Router()
const topicController = require('../../controller/topicController')


router.route('/')
    .get(topicController.getTopics)
    .post(topicController.addTopic)
    
router.route('/:id')
    .get(topicController.getTopic)
    .delete(topicController.deleteTopic)
    .put(topicController.updateTopic)


module.exports = router;