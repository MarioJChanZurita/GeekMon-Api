const messageController = require('../../controller/messageController')
const { authorize } = require('../../middleware/authMiddleware') 

module.exports = (router) => {
    router.route('/')
        .get(authorize, messageController.getMessages)
        .post(authorize, messageController.addMessage)
        
    router.route('/:id')
        .delete(authorize, messageController.deleteMessage)
        .put(authorize, messageController.updateMessage)

    return router
}