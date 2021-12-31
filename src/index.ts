import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import statusRoute from "./routes/status.routes";
import usersRoute from "./routes/users.routes";

const app = express();

// Configuração da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de Rotas
app.use(statusRoute);
app.use(usersRoute);

// Configuração dos Handlers de Error
app.use(errorHandler);

// Inicialização do Servidor
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});
