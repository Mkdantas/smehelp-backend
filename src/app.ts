import express from 'express';
import http  from 'http';
import cors from 'cors';
import { router } from './routes';


const app = express();
app.use(cors({'origin': '*'}))

const serverHttp = http.createServer(app);

app.use(express.json());
app.use(router);

export {serverHttp}