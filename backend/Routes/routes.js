const express = require('express')
const Router = express.Router()
const addcontroller = require("../controllers/addcontroller")
const getData = require("../controllers/getdatacontroller")
const updatecontroller = require("../controllers/updatecontroller")

Router.get('/getdata', getData.getDatacontroller)
Router.get("/carrinho")
Router.post('/add', addcontroller.add)
Router.put("/dadosupdate/:id", updatecontroller.update)

module.exports = Router
