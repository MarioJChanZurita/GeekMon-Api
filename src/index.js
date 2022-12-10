// CORS
// const cors = require('cors')
// OAuth imports
const oAuthService = require("./utils/tokenService");
const oAuth2Server = require("node-oauth2-server");
// Express
const express = require("express")



const PORT = process.env.PORT || 8080


const app = express()
app.oauth = oAuth2Server({
  model: oAuthService,
  grants: ["password"],
  debug: true,
});


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(app.oauth.errorHandler());

const authRoutes = require("./view/api/authentication")(
  express.Router(),
  app
);
app.use('/', require('./view/root'))
app.use('/auth', authRoutes)
app.use('/topic', require('./view/api/topic'))
app.use('/message', require('./view/api/message'))

app.listen(PORT, function () {
    console.log("Started application on port %d", PORT)
});




