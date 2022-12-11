const User = require('../model/user')
const crypto = require('crypto')



function register(username, password, role, cbFunc) {
    const shaPass = crypto.createHash("sha256").update(password).digest("hex");

    const newUser = new User({ username, password: shaPass, role })
    newUser.save(cbFunc)

}

function getUser(username, password, cbFunc) {
    const shaPass = crypto.createHash("sha256").update(password).digest("hex");

    User.findOne({username, password: shaPass}, {}, {}, (error, user) => {
      cbFunc( false, user || null)
    })
}

function isValidUser(username, cbFunc) {
    User.findOne({ username }, {}, {}, (error, user) => cbFunc(error, user || null))
}


module.exports = {
    register,
    getUser,
    isValidUser
}