const express = require('express')
const router = require('./src/routes/pessoa.js')
const Pessoa = require('./src/models/pessoa.js')

const app = express()
const port = 1000

app.use(express.json())
app.use(router)
app.listen(port, () => {
    console.log('Servidor rodando na porta 3000')
})