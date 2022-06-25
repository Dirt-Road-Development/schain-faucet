import { Express } from "express"
import cors from 'cors';

export const useCors =(app: Express) => {
    // const whitelist = [''];
    app.use(cors({
        origin: 'https://testnet.station.mylilius.com'
    }));
}