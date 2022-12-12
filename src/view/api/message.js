const messageController = require('../../controller/messageController')
const { authorize } = require('../../middleware/authMiddleware') 

module.exports = (router) => {
    router.route('/')
        .get(authorize, messageController.getMessages)
        .post(authorize, messageController.addMessage)
        .put(authorize, messageController.updateMessage)
        
    router.route('/:id')
        .delete(authorize, messageController.deleteMessage)

    return router
}