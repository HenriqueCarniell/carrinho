const express = require('express');
const routes = require('./Routes/routes')
const app = express()
const porta = 4000

app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(porta, () => {
    console.log(`Servidor rodando na ${porta}`);
})