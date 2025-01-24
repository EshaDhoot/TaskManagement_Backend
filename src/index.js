import express from 'express';
const app = express();

import { PORT } from './config/server-config.js';
import { connectToDB } from './config/db-config.js';

import v1Routes from './routes/index.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', v1Routes);
const setUpAndStartServer = () => {
    app.listen(PORT, async () => {
        console.log(`Server started at PORT: ${PORT}`);
        await connectToDB();
    });
};

setUpAndStartServer();
