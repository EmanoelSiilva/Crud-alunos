const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./router/api')
const path = require('path')
const cors = require('cors')

app.get('/', (req, res) => res.send('Salve mundão!'))
app.use(bodyParser.json())

app.use('/api', api)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('public'))
app.use(cors())

// app.use((err, req, res) => {
//     console.log(err)
//     res.send('Erro')
// })


mongoose.connect('mongodb+srv://manu:123@cluster0.jre9vc3.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('connected', () => {console.log('Conectado ao banco')})
mongoose.connection.on('error', (err) => {console.log('Error' + err)})

app.listen(3000, () => console.log(`Servidor rodando na porta 3000`))