const Token = require('../model/token')



function saveAccessToken(accessToken, userID, cbFunc) {

    const newToken = new Token({ accessToken, userID })

    newToken.save((err) => {
        cbFunc(err)
    })
}

function getUserIDFromBearerToken(bearerToken, cbFunc) {

    Token.findOne({ accessToken: bearerToken }, (error, response) => {
        const userID = response.userID || null
        cbFunc(userID)
    })

}



module.exports = {
    saveAccessToken,
    getUserIDFromBearerToken
}