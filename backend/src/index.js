const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const {setupWebsocket} = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);


mongoose.connect('mongodb+srv://omnistack10:omnistack10@cluster0-yvdll.mongodb.net/week10?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

//METODOS HTTP: GET, POST, DELETE, PUT

//TIPOS DE PARAMETROS

//Qyery Params: request.query (Filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alterção ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

app.use(cors());
app.use(express.json());
app.use(routes);



server.listen(3333);

