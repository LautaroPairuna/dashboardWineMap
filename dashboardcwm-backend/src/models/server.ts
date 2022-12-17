import express, { Application, Request, Response } from "express";
import cors from 'cors'
import Routes from '../routes/product'
import DataBase from '../database/connection'

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3002';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion iniciada en el puerto ${this.port}`)
        })
    }

    routes() {

        this.app.use('/', Routes)
    }

    middlewares() {

        this.app.use(express.json());

        this.app.use(cors())

    }

    async dbConnect() {

        try{

            await DataBase.authenticate
            console.log('Base de datos conectada')

        }catch (error) {

            console.log(error)

        }

    }
}

export default Server;