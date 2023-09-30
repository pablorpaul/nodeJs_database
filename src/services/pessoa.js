const RepositorioPessoa = require("../repositories/pessoa");

const repositorio = new RepositorioPessoa()

class ServicoPessoa {

    async PegarUm(id){
        return repositorio.PegarUm(id)
    }

    async PegarTodos(){
        return repositorio.PegarTodos()
    }

    async Adicionar(pessoa){
        if(!pessoa) {
            throw new Error("Não foi enviada a pessoa.")
        } else if(!pessoa.nome){
            throw new Error("Não foi enviado o nome da pessoa")
        } else if(!pessoa.email){
            throw new Error("Não foi enviado o email da pessoa")
        } else if(!pessoa.senha){
            throw new Error("Não foi enviado a senha da pessoa")
        }
        repositorio.Adicionar(nome, email, senha)
    }

    Alterar(id, nome, email, senha){
        if(!nome) {
            throw new Error("Favor preencher o nome.")
        }else if(!id || isNaN(id)) {
            throw new Error("Favor preencher corretamente o id.")
        }
        repositorio.Alterar(id, nome, email, senha)
    }

    Deletar(id){
        if(!id || isNaN(id)) {
            throw new Error("Favor preencher corretamente o id.")
        }
        repositorio.Deletar(id)
    }
}

module.exports = ServicoPessoa