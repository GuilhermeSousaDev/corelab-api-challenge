import '../../typeorm/data-source';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import AppError from '../errors/AppError';
import { router } from './routes/index.routes';
import '../container';

const port = process.env.PORT || 8081;
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded());

app.use(router);

app.use(errors());
app.use(AppError.errorMiddleware);

app.listen(port, () => console.log('Iniciado'))
