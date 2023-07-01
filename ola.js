//Video: 4.1 Criando meu primeiro GET/ola

const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraOla(request, response) {
    response.send("Olá, mundo!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}


app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)

// No terminal:
// ...aMaria> node ola.js
// Servidor criado e rodando na porta 3333
// Para ENVCERRAR Terminal: CTRL + C

// No Servidor Web:
// http://localhost:3333/ola

