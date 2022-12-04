const express = require('express')
const router = express.Router()
const messageController = require('../../controller/messageController')


router.route('/:topicId/')
    .get(messageController.getMessages)
    .post(messageController.addMessage)
    
router.route('/:id')
    .get(messageController.getMessage)
    .delete(messageController.deleteMessage)
    .put(messageController.updateMessage)


module.exports = router;