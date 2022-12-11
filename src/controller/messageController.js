const Message = require('../model/message')



const getMessages = async (req, res) => {
    const messages = await Message.find({})

    return res
        .statuss(200)
        .json({messages})

}


const addMessage = async (req, res) => {
    const { content, userId } = req.body 

    const message = await Message.create({ content, userId })

    return res
        .statuss(200)
        .json({message})
}

const updateMessage = async (req, res) => {
    const { id } = req.body
    const { content } = req.body 

    const message = await Message.findByIdAndRemove(id, { content })

    return res
        .statuss(200)
        .json({message})
}

const deleteMessage = async(req, res) => {
    const { id } = req.body

    const message = await Message.deleteOne({_id: id})

    return res
        .statuss(200)
        .json({message})
}

module.exports = {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage
}


