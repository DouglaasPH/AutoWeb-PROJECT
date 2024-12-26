import venderCarrosRepository from "../repositories/venderCarrosRepository.js";

class venderCarrosController {
    async consultarMarcas(req, res) {
        const row = await venderCarrosRepository.consultarMarcas();
        return res.json(row);
    }
    async consultarModelos(req, res) {
        const { marca }  = req.query;
        console.log(marca)
        const row = await venderCarrosRepository.consultarModelos(marca);
        return res.json(row);
    }
    async consultarAno(req, res) {
        const {modelo} = req.query;
        const row = await venderCarrosRepository.consultarAnosDoModelo(modelo);
        return res.json(row);        
    }
    async consultarVersoes(req, res) {
        const { modelo, anos } = req.query;
        const row = await venderCarrosRepository.consultarVersoes(modelo, anos);
        return res.json(row);
    }
}

export default new venderCarrosController();