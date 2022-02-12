const express = require('express')

const route = express.Router()

route.get('/start', (req, res) =>{
    res.sendFile('start')
})