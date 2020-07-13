import express from 'express';
import { router } from './routes/loginRouter';
import bodyParser from 'body-parser';
import './controllers/LoginController';
import { AppRouter } from './AppRouter';

let cookieSession = require('cookie-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['alakhamora'] }));
app.use(router);
app.use(AppRouter.getInstance());

console.log(app.routes);
app.listen(3000, () => console.log('Listening on port 3000'));
