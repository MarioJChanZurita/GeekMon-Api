const express = require('express')
const router = express.Router()



router.route('/')
    .get((req, res) => {
        res.json({
            API: 'GeekMon'
        })
    })


module.exports = router;