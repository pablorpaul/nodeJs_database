const RepositorioPessoa = require("../repositories/pessoa");

const repositorio = new RepositorioPessoa()

class ServicoPessoa {

    async PegarUm(id){
        return repositorio.PegarUm(id)
    }

    PegarTodos(){
        return repositorio.PegarTodos()
    }

    Adicionar(nome){
        if(!nome) {
            throw new Error("Favor preencher o nome.")
        }
        repositorio.Adicionar(nome)
    }

    Alterar(id, nome){
        if(!nome) {
            throw new Error("Favor preencher o nome.")
        }else if(!id || isNaN(id)) {
            throw new Error("Favor preencher corretamente o id.")
        }
        repositorio.Adicionar(nome)
    }

    Deletar(id){
        if(!id || isNaN(id)) {
            throw new Error("Favor preencher corretamente o id.")
        }
        repositorio.Deletar(id)
    }

}

module.exports = ServicoPessoa