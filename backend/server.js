const express = require('express');
const routes = require('./Routes/routes')
const cors = require('cors');
const app = express()
const porta = 4000

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})
