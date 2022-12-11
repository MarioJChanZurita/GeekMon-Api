const userService = require('../utils/userService')



const registerUser = async (req, res) => { // register
  // #swagger.tags = ['User']

  const { username, password, role } = req.body

  userService.isValidUser(username, (error, userExists) => {
    if (error || userExists) {
      const message = error
          ? "Something went wrong!"
          : "This user already exists!";

      return res
          .status(400)
          .json({
            'message': message
          })
    }

    userService.register(username, password, role, (err) => {
      return res
              .status(err ? 400: 201)
              .json({
                'message': err ?  "Something went wrong!" : "Success!!" 
              })
    })
  })
};


const authUser = async (req, res) => { };


function sendResponse(res, message, error) {
  res.status(error !== undefined ? 400 : 200).json({
      message: message,
      error: error,
  });
}

module.exports = {
  registerUser, 
  authUser
}