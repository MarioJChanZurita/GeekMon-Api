const userService = require('../utils/userService')



const registerUser = async (req, res) => { // register
  const { username, password } = req.body

  userService.isValidUser(username, (error, isValidUser) => {
    if (error || !isValidUser) {
      console.log(error)
      const message = error
          ? "Something went wrong!"
          : "This user already exists!";

      sendResponse(res, message, error);

      return;
    }

    userService.register(username, password, (response) => {
      sendResponse(
        res,
        response.error === undefined ? "Success!!" : "Something went wrong!",
        response.error
      );
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