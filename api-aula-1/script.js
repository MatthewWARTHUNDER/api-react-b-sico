const express = require('express')
const app = express();

app.use(express.json())


let personList = []

const port = 3000;

const nome = "T-55A";


app.get('/visualizar', (req, res) =>{
    res.send(personList)
})

app.post(`/params/:id`, (req, res) =>{

    const {id} = req.params;
    res.send(id)
})


app.delete(`/deletar`, (req, res) =>{

    const {name, age} = req.body
    personList.pop()
    res.send(`O usuário foi removido! o nome do usuário foi ${name}`)
})


app.put(`/update`, (req, res) =>{
    
    const{name, age} = req.body
    personList.put("CPF")
    res.send(`Os dados do usuário foi alterado! esse usuário foi ${name}`)
})


 app.post('/cadastrar', (req,res) => {
    const { name, age} = req.body;
    personList.push({name, age})
     res.send(`Usuário recebido! nome do usuários ${name}`)

 })

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})


console.log("onça pintada")

