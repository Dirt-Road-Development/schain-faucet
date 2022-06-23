import express, { Application, Express, Request, Response } from "express";
import * as Middleware from "./middleware";
import * as Controller from './controllers';

import { PORT } from './config/config';
import { fillFaucet, Provider } from "./utils";

class SChainFaucet {

    private app: Express = express();

    constructor() {
        /// Initialize Middleware
        this._initializeGlobalMiddleware();
        /// Initialize Controllers
        this._initializeControllers();
        /// Fill Faucet Manager -- Automatic Balance Checks
        this._initializeFaucetManager();
    }

    private _initializeGlobalMiddleware() {
        Middleware.useJson(this.app);
        Middleware.useUrlEncoded(this.app);
        Middleware.useCors(this.app);
        Middleware.useHelmet(this.app);
    }
    private _initializeControllers() {
        this.app.get('/', (req: Request, res: Response) => {
            return res.status(200).send("Faucet Active");
        })
        this.app.get('/developer/:address', Controller.DeveloperController);
        this.app.get('/dot/:address', Controller.DotController);
        this.app.get('/general/:address', Controller.GeneralController);
    }

    private async _initializeFaucetManager() {
        const provider: Provider = new Provider();
        await fillFaucet(provider.signer);
        provider.closeProvider();
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