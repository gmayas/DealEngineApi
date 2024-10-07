import express, { Application } from 'express';
import morgan from 'morgan';
// Cors
import cors from 'cors';
// Routes
import rootRoute from './routes/index';
import flightboardRoute from './routes/flightboard'
// settings
const app: Application = express();
app.set('port', process.env.PORT || 4000 );
// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// Cors
app.use(cors())
// Routes
app.use('/', rootRoute);
app.use('/api/flightboard', flightboardRoute);
//
export default app;