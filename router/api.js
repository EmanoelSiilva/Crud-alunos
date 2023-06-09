const express = require('express')
const router = express.Router()

const aluno = require('../controllers/aluno')

router.get('/aluno', aluno.listaAlunos) //Rota que redireciona para a tela de cadastro
router.post('/interest', aluno.create) //Adiciona um novo aluno
router.delete('/interest/:id', aluno.delete) //Deleta um aluno
router.patch('/interest/:id', aluno.update) //Atualiza um aluno
router.get('/lista', aluno.read) //Lista os alunos

module.exports = router