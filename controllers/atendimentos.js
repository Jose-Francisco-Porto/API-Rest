const Atendimento = require('../models/atendimentos');

module.exports = app => {
    //lista os atendimentos
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })
    //´pesquisa os atendimentos 
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })
    //adicionar atendimentos
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })
    //alterar atendimentos
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })
    //deleta atendimento
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })

}