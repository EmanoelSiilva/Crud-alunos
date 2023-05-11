const PI = require('../models/model')

exports.create = (req, res, next) => { //Cria um novo aluno 
    // cria novo ‘pi’ na BD a partir do request, depois, devolve o
    //‘pi’ criado ao cliente
    PI.create(req.body).then(function(pi){
        res.send(pi);
    }).catch(next)
};

exports.delete = (req, res, next) => { //Deleta um aluno
    PI.findByIdAndRemove({ _id: req.params.id }).then((pi) => { //Será deletado a partir do id do aluno
        res.send(pi)
    }).catch(next)
}

exports.update = (req, res, next) => {
    PI.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        PI.findOne({ _id: req.params.id }).then((pi) => {
            res.send(pi)
        }).catch(next)
    })
}

exports.read = (req, res, next) => {
    PI.find({ }).then((pi) => {
        res.send(pi)
    })
}
exports.teste = (req, res) => {res.send('Teste no controller aluno')}


