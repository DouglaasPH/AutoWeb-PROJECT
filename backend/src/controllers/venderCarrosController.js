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
        const { marca, modelo } = req.quey;
        const row = await venderCarrosRepository.consultarAnosDoModelo(marca, modelo);
        return res.json(row);        
    }
}

export default new venderCarrosController();