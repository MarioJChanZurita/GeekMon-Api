const User = require('../model/user')




function register(username, password, cbFunc) {
    const shaPass = crypto.createHash("sha256").update(password).digest("hex");

    User.save({ username, password: shaPass }, cbFunc)

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