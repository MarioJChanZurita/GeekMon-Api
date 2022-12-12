const Message = require('../model/message')



const getMessages = async (req, res) => {
    /* 
    #swagger.tags = ['Message']
    #swagger.description = 'Endpoint para enviar todos los mensajes del foro'
    */
    
    const messages = await Message.find({})

    return res
        .status(200)
        .json({messages})

    /* #swagger.responses[200] = { 
               schema: { messages: 'array' },
               description: 'Lista de mensajes del foro' 
        } */

}


const addMessage = async (req, res) => {
    /* 
    #swagger.tags = ['Message']
    #swagger.description = 'Endpoint para agregar un nuevo mensaje al foro'
    */
    const { content, userId } = req.body 

    const message = await Message.create({ content, userId })

    return res
        .status(200)
        .json({message})

    /* #swagger.responses[200] = { 
               schema: { message: 'string' },
               description: 'Mensaje nuevo' 
        } */
}

const updateMessage = async (req, res) => {
    /* 
    #swagger.tags = ['Message']
    #swagger.description = 'Endpoint para actualizar un mensaje del foro'
    */
    const { id, content } = req.body 

    const message = await Message.findByIdAndRemove(id, { content })

    return res
        .status(200)
        .json({message})
    /* #swagger.responses[201] = { 
               schema: { message: 'string' },
               description: 'Mensaje actualizado' 
        } */
}

const deleteMessage = async(req, res) => {
     /* 
    #swagger.tags = ['Message']
    #swagger.description = 'Endpoint para actualizar un mensaje del foro'
    */
    const { id } = req.body

    const message = await Message.deleteOne({_id: id})

    return res
        .status(200)
        .json({message})
    /* #swagger.responses[200] = { 
               schema: { message: 'string' },
               description: 'Mensaje eliminado' 
        } */
}

module.exports = {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage
}


