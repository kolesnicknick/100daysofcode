"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../AppRouter");
var MetaDataKeys_1 = require("./MetaDataKeys");
function bodyValidator(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request - body is missing');
            return;
        }
        keys.forEach(function (key) {
            if (!req.body[key]) {
                res.status(422).send("Invalid request - body key: " + key + " is missing");
                return;
            }
        });
        next();
    };
}
function controller(prefix) {
    return function (target) {
        for (var key in target.prototype) {
            var route = target.prototype[key];
            var path = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.PATH, target.prototype, key);
            var method = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.METHOD, target.prototype, key);
            console.log("" + prefix + path);
            var middleware = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.MIDDLEWARE, target.prototype, key) || [];
            var requiredKeys = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.VALIDATOR, target.prototype, key) || [];
            if (requiredKeys.length > 0)
                middleware.push(bodyValidator(requiredKeys));
            if (path) {
                AppRouter_1.AppRouter.getInstance()[method]("" + prefix + path, __spreadArrays(middleware), route);
            }
        }
    };
}
exports.controller = controller;
