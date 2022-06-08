import { Express } from "express"
import helmet from "helmet"

export const useHelmet =(app: Express) => {
    app.use(helmet());
}