import { Router } from "express";
import usersController from "./controllers/usersController.js";

const router = Router();

router.get("/verificarEmailESenha", usersController.verificarEmailESenha);
router.get(
  "/verificarNomeDeUsuario",
  usersController.verificacaoDoNomeDeUsuario
);
router.post("/cadastro", usersController.store);

export default router;
