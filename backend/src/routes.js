import { Router } from "express";
import usersController from "./controllers/usersController.js";

const router = Router();

router.get("/entrar", usersController.entrarConta);
router.get("/verificar-dados", usersController.verificarDados);
router.post("/cadastrar", usersController.criarConta);
router.put("/atualizar-conta", usersController.atualizarConta);

export default router;
