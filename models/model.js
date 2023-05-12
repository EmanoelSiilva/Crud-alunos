const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DB = new Schema({ //Criando a tabela, que posteriomente chamarei de aluno
  nome: {
    type: String,
    required: [true, "Campo obrigatório!"]
  },
  dataNasc: {
    type: String
  },
  matricula: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  },
  email: {
    type: String
  }
});
// criar Modelo_PI baseado em PISchema: ‘aluno’->nome da // coleção
const PI = mongoose.model('aluno', DB);
// exportar Modelo_PI
module.exports = PI;