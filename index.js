const express = require("express")
// const cors = require('cors')
const PORT = process.env.PORT || 8080

const app = express()

app.use('/', require('./view/root'))
app.use('/auth', require('./view/api/authentication'))
app.use('/topic', require('./view/api/topic'))
app.use('/message', require('./view/api/message'))

app.listen(PORT, function () {
    console.log("Started application on port %d", PORT)
});