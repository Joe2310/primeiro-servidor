const express = require('express')
const app = express()

let usuarios = [
    {id: 1, nome: 'joe', idade: 24, profissao:'FULL STACK'},
    {id: 1, nome: 'Joao', idade: 35, profissao:'Mecanico'},
    {id: 1, nome: 'Gilvania', idade: 19, profissao:'Designer'},
    {id: 1, nome: 'Marcos', idade: 28, profissao:'Vaqueiro'}

]
    




app.get('/',(req, res)=> {
    res.send('Essa é minha rota principal.')

})





app.get('/usuarios',(req, res)=> {
    res.send(usuarios)
})


app.listen(3000);