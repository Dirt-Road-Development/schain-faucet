import express, { Application, Express, Request, Response } from "express";
import * as Middleware from "./middleware";
import * as Controller from './controllers';

class SChainFaucet {

    private app: Express = express();

    constructor() {
        /// Initialize Middleware
        this._initializeGlobalMiddleware();
        /// Initialize Controllers
    }

    private _initializeGlobalMiddleware() {
        Middleware.useJson(this.app);
        Middleware.useUrlEncoded(this.app);
        Middleware.useHelmet(this.app);
    }
    private _initializeControllers() {
        this.app.get('/developer', Controller.DeveloperController);
        this.app.get('/dot', Controller.DotController);
        this.app.get('/general', Controller.GeneralController);
        
    }

}