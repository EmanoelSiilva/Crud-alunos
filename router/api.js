const express = require('express')
const router = express.Router()

const aluno = require('../controllers/aluno')

router.get('/teste', aluno.teste)
router.post('/interest', aluno.create) //Adiciona um novo aluno
router.delete('/interest/:id', aluno.delete)

module.exports = router