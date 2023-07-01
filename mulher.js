// Se será um Servidor, precisa da configuração básica do SERVER.js

const express = require("express")
// Criar a configuração da rota:
const router = express.Router()


const app = express()
const porta = 3333

// Criar a função desejada:
function mostraMulher(request, response) {
    response.json({
        nome: "Marcia Moreira",
        imagem: 'link da imagem, foto linkedin',
        minibio: "Desenvolvedora"
    })
}
// Função do Servidor:
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

// Criar a parte do nosso endereço - mostrar:
app.use(router.get('/mulher', mostraMulher))
// O Servidor escuta a porta e Mostra:
app.listen(porta, mostraPorta)

/*
============================
01- No Terminal:
PS C:\Users\mmnol\OneDrive\Área de Trabalho\Projeto_Back_End_PrograMaria> node mulher.js
Servidor criado e rodando na porta  3333


02- Depois vá para o Navegador testar:

http://localhost:3333/mulher
Resposta:
{"nome":"Marcia Moreira","imagem":"link da imagem, foto linkedin","minibio":"Desenvolvedora"}

===========================================
*/