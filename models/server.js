const express = require('express');
const cors = require('cors');
const {
    dbConnection
} = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar BD
        this.database();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    async database() {
        await dbConnection();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //directorio público
        this.app.use(express.static('public'));

        //Lectura y parseo del body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => { //callback
            console.log('Servidor corriendo en el puerto:', this.port);
        });
    }
}

module.exports = Server;