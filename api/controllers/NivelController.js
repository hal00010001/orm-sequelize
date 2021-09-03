//const database = require('../models')

const { NiveisServices } = require('../services')
const niveisServices = new NiveisServices()

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        //const todosOsNiveis = await database.Niveis.findAll()
        const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmNivel(req, res){
      const { id } = req.params
      try {
        const umNivel = await niveisServices.pegaUmRegistro(id)
        return res.status(200).json(umNivel)
      }
      catch(error){
        return res.status(500).json(error.message)
      }
    }
}

module.exports = NivelController