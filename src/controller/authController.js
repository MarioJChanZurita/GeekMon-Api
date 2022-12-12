const userService = require('../utils/userService')
const tokenService = require('../utils/tokenService')
const User = require('../model/user')


const registerUser = async (req, res) => {
   /* 
    #swagger.tags = ['Auth']
    #swagger.description = 'Endpoint para registrar un nuevo usuario'
   */

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
    /* #swagger.responses[201] = { 
               schema: { message: 'string' },
               description: 'Mesanje de exito' 
        } */
  })
};


const authUser = async (req, res) => { };


const getAccessToken = async (req, res) => {
  /* 
  #swagger.tags = ['Auth']
  #swagger.description = 'Endpoint para registrar un nuevo usuario'
   */
  const { Authorization } = req.headers
  const { username } = req.body

  const user = User.findOne({username})

  jwt = tokenService.generateJwtToken(Authorization)

  return res 
        .status(200)
        .json({ jwt, userId: user._id })
  /* #swagger.responses[201] = { 
               schema: { jwt: 'string' },
               description: 'Token de acceso' 
        } */
}



module.exports = {
  registerUser, 
  authUser,
  getAccessToken
}