"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDate = void 0;
exports.convertDate = function (dateStr) {
    var dateArr = dateStr.split('/');
    return new Date(+dateArr[2], +dateArr[1] - 1, +dateArr[0]);
};
