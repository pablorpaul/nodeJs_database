const express = require('express')
const ControllerPessoa = require("../controllers/pessoa.js");

const router = express.Router()

const controllers = new ControllerPessoa()

router.get("/api/nomes/", controllers.PegarTodos)
router.get("/api/nomes/:id", controllers.PegarUm)
router.post("/api/nome", controllers.Adicionar)
router.put("/api/nome/:id", controllers.Alterar)
router.delete("/api/nome/:id", controllers.Deletar)

module.exports = router;