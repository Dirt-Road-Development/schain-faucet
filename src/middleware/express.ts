import { Express, json, urlencoded } from "express";

export const useJson = (app: Express) => {
    app.use(json());
}

export const useUrlEncoded = (app: Express) => {
    app.use(urlencoded({
        extended: false
    }));
}