import express from 'express';
import bodyParser from 'body-parser';
import './controllers/LoginController';
import './controllers/BaseController';
import { AppRouter } from './AppRouter';

let cookieSession = require('cookie-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['alakhamora'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => console.log('Listening on port 3000'));
