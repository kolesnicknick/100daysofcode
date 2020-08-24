"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
require("./controllers/LoginController");
require("./controllers/BaseController");
var AppRouter_1 = require("./AppRouter");
var cookieSession = require('cookie-session');
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['alakhamora'] }));
app.use(AppRouter_1.AppRouter.getInstance());
var a = { email: 'wiq@this.ua',
    lastname: 'Kole',
    firstname: 'Niko',
    userid: 'pnoUser',
    additional_fields: {
        2: '2016/10/10',
        4: '+380997859700',
        5: ';Agent;',
        6: '+380997859700',
        7: true,
        8: true,
        9: true,
        10: true,
        11: true,
        12: true,
        13: true,
        14: true,
        16: '600'
    } };
console.log(JSON.stringify(a));
app.listen(3000, function () { return console.log('Listening on port 3000'); });
