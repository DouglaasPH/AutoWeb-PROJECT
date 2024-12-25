import { Router } from "express";
import usersController from "./controllers/usersController.js";
import venderCarrosController from "./controllers/venderCarrosController.js";

const router = Router();

// ROTAS PARA GERENCIAMENTO DE CONTA
router.get("/entrar", usersController.entrarConta);
router.get("/verificar-dados", usersController.verificarDados);
router.get("/consultar-dados", usersController.consultarDados);
router.post("/cadastrar", usersController.criarConta);
router.put("/atualizar-conta", usersController.atualizarConta);


// ROTAS PARA FUNCIONALIDADE VENDER CARROS
router.get("/vender-carro/consultar-marcas", venderCarrosController.consultarMarcas);
router.get("/vender-carro/consultar-modelos", venderCarrosController.consultarModelos);
//router.get("/vender-carro/consultar-ano", venderCarrosController.)consultar;



export default router;
