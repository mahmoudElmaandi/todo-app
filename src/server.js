import express from 'express'
import cors from 'cors'
import { connectDB } from './misc/db.js';

import userHandler from './handlers/userHandler.js';
import todoRouter from './routes/todoRouter.js'

import { authMiddleware } from './middleware/authMiddleware.js';
import { loggerMiddleware } from './middleware/loggerMiddleware.js';
import { errorHandler } from './middleware/errorHandler.js';

export const createServer = async (config) => {

    await connectDB(config.mongoUrl);

    const app = express();
    app.disable('x-powered-by');

    app.use(express.json());
    app.use(cors())

    app.use(loggerMiddleware);

    const apiEntry = `api/v${config.apiVer}`;
    app.post(`/${apiEntry}/getToken`, userHandler.getToken)
    app.use(`/${apiEntry}/todo`, authMiddleware, todoRouter);

    app.use(errorHandler)
    return app
};