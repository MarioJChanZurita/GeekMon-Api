const express = require("express")
// const cors = require('cors')
const PORT = process.env.PORT || 8080

const app = express()

app.use('/', require('./view/root'))

app.listen(PORT, function () {
    console.log("Started application on port %d", PORT)
});