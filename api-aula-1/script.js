
const express = require('express')
const app = express();

app.use(express.json())


let personList = []

const port = 3000;

const nome = "T-55A";


app.get('/visualizar', (req, res) =>{
    res.send(personList)
    
    
})

app.post(`/params`, (req, res) =>{

    const {name} = req.params;
    res.send(name)

    const {age} = req.params;
    res.send(age)

    const {id} = req.params;
    res.send(id)
})

// deletar usuário no array
app.delete(`/deletar/:id`, (req, res) =>{
    const {id} = req.params;
    if(personList[ id - 1]){
        personList.splice(id ,1 - 1)
        res.send('Usuário deletado com sucesso');
    }else{
        res.send(404).send('Usuário não encontrado')
    }

    const {name, age} = req.body
    personList.pop()
    res.send(`O usuário foi removido! o nome do usuário foi ${name}`)
})

// atualizar array
app.put(`/update`, (req, res) =>{
    
    const {id} = req.params;
    const{name, age} = req.body
    try{
        personList[ id - 1] = {id, nome, age};
        res.send(`Os dados do usuário foi alterado! esse usuário foi ${id} \n Novo nome: ${name} \n nova idade ${age} `);
    }catch(err){
        res.send("Usuário não encontrado")
    }
    
})

// cadastrar o usuário
 app.post('/cadastrar', (req, res) => {
    const {name, age} = req.body;
    const id   = personList.length;
    personList.push({id, name, age})
     res.send(`Usuário recebido!\nID: ${id}\n nome do usuário: ${name}\n age: ${age} `)

 })

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})


console.log("onça pintada")

