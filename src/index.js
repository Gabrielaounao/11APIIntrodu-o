//index.js
import express from "express";   
import dotenv from "dotenv";
import roteadorUsuario from "./routes/usuario.js";

dotenv.config();   // Requisição do pacote do express

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.use(express.json());

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Gabriela de Souza Reis",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});