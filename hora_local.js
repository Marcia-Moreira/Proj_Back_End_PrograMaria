//Exercício:
/*Mais um exercício para você ficar craque no GET!
Crie o código para quando acessar o endereço localhost:3333/hora no navegador, você receba a hora local. Como você criaria uma rota e visualizaria essa informação na página do navegador?
Para te ajudar, esta é a função que captura o horário local:
function mostraHora(request, response) {
 const data = new Date()
 const hora = data.toLocaleTimeString('pt-BR')
 response.send(hora)
}
*/
const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const data = new Date()
const hora = data.toLocaleTimeString('pt-BR')

//Toda vez que uma Função estiver relacionada com o Verbo do HTTB ela deve ter: request e response!!!
function mostraHora(request, response) {
    response.send(hora)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/hora_local', mostraHora))
app.listen(porta, mostraPorta)

/*
============================
01- No Terminal:
PS C:\Users\mmnol\OneDrive\Área de Trabalho\Projeto_Back_End_PrograMaria> node mulheres.js
Servidor criado e rodando na porta  3333

ENCERRAR Servidor no Terminal - Crtl + C

02- Depois vá para o Navegador testar:

http://localhost:3333/hora_local  *Obs: Nome do arquivo não funciona com letra maiúscula

Resposta:
iuhuuu consegui sem gabarito:
15:42:05


*/
