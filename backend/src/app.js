import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

// permitir apenas a origem específica (front-end) a utilização da API
// Configurar CORS para permitir solicitações apenas de localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173", // Substitua pela URL do seu frontend
    methods: ["GET, POST", "PUT", "DELETE"], // Métodos que você permite
    allowedHeaders: "Content-Type, Authorization", // Cabeçalhos permitidos
  })
);

// indicar para o express ler body com json
app.use(express.json());

// usar o router
app.use(router);

export default app;
