const DiretorModel = require("../models/DiretorModel")

const diretorController = {
    async getAllDiretores(req, res) {
        const Diretores = await DiretorModel.findAll()

        return res.json(Diretores)
    },

    async creatediretor(req, res) {
        const { nome } = req.body

        const diretor = await DiretorModel.create({
            nome
        })

        return res.status(201).json(diretor)
    }
}

module.exports = diretorController