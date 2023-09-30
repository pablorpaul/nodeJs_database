const Pessoa = require('../models/pessoa.js')

class RepositorioPessoa {
    
    async PegarUm(id){
        return Pessoa.findOne({
            where: { id }
        })
    }

    async PegarTodos(){
        return Pessoa.findAll()
    }

    async Adicionar(pessoa){
        return await Pessoa.create(
            pessoa
        )
    }

    Alterar(id, nome, email, senha){
        return Pessoa.update({
            nome,
            email,
            senha
        },
        {
            where: { id }
        })
    }

    Deletar(id){
        Pessoa.destroy({
            where: {id}
        })
    }
}

module.exports = RepositorioPessoa