"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("../decorators");
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.getBase = function (req, res) {
        // @ts-ignore
        if (req.session && req.session.loggedIn) {
            res.send("\n    <div> \n       <div>\n            You are logged in\n       </div>\n       <a href=\"/auth/logout\">Logout</a>\n    </div>\n    ");
        }
        else {
            res.send("\n    <div> \n       <div>\n            You are NOT logged in\n       </div>\n       <a href=\"/auth/login\">Log in</a>\n    </div>\n    ");
        }
    };
    __decorate([
        decorators_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], BaseController.prototype, "getBase", null);
    BaseController = __decorate([
        decorators_1.controller('')
    ], BaseController);
    return BaseController;
}());
