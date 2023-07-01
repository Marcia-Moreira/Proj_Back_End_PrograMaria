// Gabarito do Exercício:

const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

//Toda vez que uma Função estiver relacionada com o Verbo do HTTB ela deve ter: request e response!!!
function mostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/hora_local_gabarito', mostraHora))
app.listen(porta, mostraPorta)