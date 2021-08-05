const express = require('express')
// const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

// app.use(bodyParser.json())

const port = 3000

// app.get('/teste', (req, res) => res
//     .status(200)
//     .send({ mensagem: 'Boas-vindas à API' })
// )

routes(app)

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`))

module.exports = app