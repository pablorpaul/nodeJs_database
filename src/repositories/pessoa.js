const nomes = new Array("Alice", "Bob", "Charlie");
const Pessoa = require('../models/pessoa.js')

class RepositorioPessoa {
    
    async PegarUm(id){
        return Pessoa.findOne({
            where: { id }
        })
    }

    PegarTodos(){
        return Pessoa.findAll()
    }

    Adicionar(nome){
        nomes.push(nome)
    }

    Alterar(id, nome){
        nomes[id] = nome
    }

    Deletar(id){
        nomes.splice(id, 1)
    }
}

module.exports = RepositorioPessoa