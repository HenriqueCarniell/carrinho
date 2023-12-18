const express = require('express')
const Router = express.Router()
const addcontroller = require('../controllers/addcontroller')

Router.post('/add', addcontroller.add)

module.exports = route