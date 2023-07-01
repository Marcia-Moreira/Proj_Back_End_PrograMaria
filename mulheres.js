const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

//Vamos guardar a lista numa Constante / Arrei
const mulheres = [
    {
        nome: 'Marcia Moreira',
        imagem: 'link de foto.png',
        minibio: 'Desenvolvedora'
    },
    {
        nome: 'Nathana de Deus',
        imagem: 'link de foto.png',
        minibio: 'Contadora'
    },
    {
        nome: 'Maria Daniela',
        imagem: 'link de foto',
        minibio: 'Artesã'
    }
]

//Toda vez que uma Função estiver relacionada com o Verbo do HTTB ela deve ter: request e response!!!
function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)

/*
============================
01- No Terminal:
PS C:\Users\mmnol\OneDrive\Área de Trabalho\Projeto_Back_End_PrograMaria> node mulheres.js
Servidor criado e rodando na porta  3333

ENCERRAR Servidor no Terminal - Crtl + C

02- Depois vá para o Navegador testar:

http://localhost:3333/mulheres

Resposta:
[{"nome":"Marcia Moreira","imagem":"link de foto.png","minibio":"Desenvolvedora"},{"nome":"Nathana de Deus","imagem":"link de foto.png","minibio":"Contadora"},{"nome":"Maria Daniela","imagem":"link de foto","minibio":"Artesã"}]

*/