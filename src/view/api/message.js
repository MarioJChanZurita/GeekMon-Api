const express = require('express')
const messageController = require('../../controller/messageController')

module.exports = (router, app) => {
    router.route('/')
        .get(app.oauth.authorise(), messageController.getMessages)
        .post(messageController.addMessage)
        
    router.route('/:id')
        .delete(messageController.deleteMessage)
        .put(messageController.updateMessage)

    return router
}