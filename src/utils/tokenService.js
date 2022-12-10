const Token = require('../model/token')



function saveAccessToken(accessToken, userID, cbFunc) {

    Token.save({ accessToken, userID }, (error, response) => {
        cbFunc(error)
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