// CORS
const cors = require('cors')
// OAuth imports
const oAuthService = require("./utils/tokenService");
const oAuth2Server = require("node-oauth2-server");
// Express
const express = require("express")
// DB
const db = require('./config/db');
// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')


const PORT = process.env.PORT || 8080


db.connect()
const app = express()
app.oauth = oAuth2Server({
  model: oAuthService,
  grants: ["password"],
  debug: true,
});

app.use(cors({
  origin: '*'
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(app.oauth.errorHandler());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const authRoutes = require("./view/api/authentication")(
  express.Router(),
  app
);
const messageRoutes = require('./view/api/message')(
  express.Router(),
  app
)
const pokemonRoutes = require('./view/api/pokemon')(
  express.Router(),
  app
)
app.use('/', require('./view/root'))
app.use('/auth', authRoutes)
app.use('/message', messageRoutes)
app.use('/pokemon', pokemonRoutes)

app.listen(PORT, function () {
    console.log("Started application on port %d", PORT)
});




