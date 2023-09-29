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

    PegarTodos(req, res){
        try {
            const result = servico.PegarTodos()

            res.status(200).json({ nomes: result})
        } catch (eror) {
            res.status(500).json({ message: "Erro ao listar nomes"})
        }
    }

    Adicionar(req, res){
        try {
            const nome = req.body.nome

            servico.Adicionar(nome)

            res.status(200).json({ message: "Adicionado com sucesso!"})
        } catch (error) {
            res.status(500).json({ message: "Erro ao adicionar"})
        }
    }

    Alterar(req, res){
        try {
            const index = req.params.id
            const nome = req.body.nome

            servico.Alterar(index, nome)

            res.status(200).json({ message: "Alterado com sucesso!"})
        } catch (error) {
            res.status(500).json({ message: "Erro ao alterar"})
        }
    }

    Deletar(req, res){
        try {
            const index = req.params.id

            servico.Deletar(index)

            res.status(200).json({ message: "Deletado com sucesso!"})
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar"})
        }
    }
}

module.exports = ControllerPessoa