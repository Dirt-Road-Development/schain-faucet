import express, { Application, Express, Request, Response } from "express";
import * as Middleware from "./middleware";
import * as Controller from './controllers';

import { PORT } from './config/config';

class SChainFaucet {

    private app: Express = express();

    constructor() {
        /// Initialize Middleware
        this._initializeGlobalMiddleware();
        /// Initialize Controllers
        this._initializeControllers();
    }

    private _initializeGlobalMiddleware() {
        Middleware.useJson(this.app);
        Middleware.useUrlEncoded(this.app);
        Middleware.useHelmet(this.app);
    }
    private _initializeControllers() {
        this.app.get('/', (req: Request, res: Response) => {
            return res.status(200).send("Faucet Active");
        })
        this.app.get('/developer', Controller.DeveloperController);
        this.app.get('/dot', Controller.DotController);
        this.app.get('/general', Controller.GeneralController);
        
    }

    public listen() {
        this.app.listen(PORT, () => {
            console.log("Faucet Listening on PORT: ", PORT);
        })
    }
}

export {
    SChainFaucet
}