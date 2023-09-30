const ServicoPessoa = require("../services/pessoa");

const servico = new ServicoPessoa()

class ControllerPessoa {

    async PegarUm(req, res){
        try{
            const index = req.params.id

            const result = await servico.PegarUm(index)

            res.status(200).json({ nome: result})
        } catch (error) {
            res.status(500).json({ message: "Erro ao pegar um nome"})
        }
    }

    async PegarTodos(req, res){
        try {
            const result = await servico.PegarTodos()

            res.status(200).json({ nomes: result})
        } catch (eror) {
            res.status(500).json({ message: "Erro ao listar nomes"})
        }
    }

    async Adicionar(req, res){
        try {
            const result = await servico.Adicionar(req.body.pessoa)

            res.status(200).json({ message: "Adicionado com sucesso!"})
        } catch (error) {
            res.status(500).json({ message: "Erro ao adicionar"})
        }
    }

    Alterar(req, res){
        try {
            servico.Alterar(req.params.id, req.body.nome, req.body.email, req.body.senha)

            res.status(201).json({ pessoa: result})
        } catch (error) {
            res.status(500).json({ message: "Erro ao alterar"})
        }
    }

    Deletar(req, res){
        try {
            servico.Deletar(req.params.id)

            res.status(204)
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar"})
        }
    }
}

module.exports = ControllerPessoa