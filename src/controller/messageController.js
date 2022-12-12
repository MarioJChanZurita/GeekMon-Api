const Message = require('../model/message')



const getMessages = async (req, res) => {
    /* 
    #swagger.tags = ['Message']
    #swagger.description = 'Endpoint para enviar todos los mensajes del foro'
    */
    
    const messages = await Message.find({}).populate([
        { path: 'userId', select: '_id username' }
      ])
      .then((messages) => {
        return res.status(200).json({ messages});
      });

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
    const { message, userId } = req.body 

    const savedMessage = await Message.create({ content: message, userId: userId })

    return res
        .status(200)
        .json({savedMessage})

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
    const { id, content } = req.params 

    console.log(req.params, req.body, req.headers)

    const message = await Message.findByIdAndUpdate(id, { content })

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
    const { id } = req.params

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


