const Token = require('../model/token')
const jwt = require('jsonwebtoken')



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

function generateJwtToken (id) {
    
    const JWT_SECRET = "secret-jwt-key";

    return jwt.sign({ id }, JWT_SECRET, {
      expiresIn: '30d',
    });
};

module.exports = {
    saveAccessToken,
    getUserIDFromBearerToken,
    generateJwtToken
}