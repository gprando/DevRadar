const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0-lllu0.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json()); // vai entender requisiçoes com corpo JSON
app.use(routes);

server.listen(3333);

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// QUERY Params: request.query (EX: ?search=Diego) --> url | usados para filtros, ordenações, paginações
// ROUTE Params: request.params (PUT e DELETE) --> Identificar um recurso na alteração ou remoção
// BODY: request.body (Dados para criação ou alteração de um registro)
