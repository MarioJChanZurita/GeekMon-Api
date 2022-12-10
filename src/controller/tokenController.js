const Token = require('../model/token')




export const saveAccessToken = async (req, res) => {
    const { accessToken, userId } = req.body

    const token = await Token.create({ accessToken, userId })
    
    res.status(201).json({
        token
    });
}


export const getUserIdFromBearerToken = async (req, res) => {
    const { bearerToken } = req.body

    const userId = await Token.findOne({ bearerToken });

    res.status(200).json({
        userId
    })
}

