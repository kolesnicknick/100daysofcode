"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    // @ts-ignore
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div> \n       <div>\n            You are logged in\n       </div>\n       <a href=\"/logout\">Logout</a>\n    </div>\n    ");
    }
    else {
        res.send("\n    <div> \n       <div>\n            You are NOT logged in\n       </div>\n       <a href=\"/login\">Log in</a>\n    </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    // @ts-ignore
    req.session = { loggedIn: false };
    res.redirect('/');
});
