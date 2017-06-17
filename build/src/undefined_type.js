"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UndefinedType = (function () {
    function UndefinedType() {
    }
    UndefinedType.prototype.validate = function (data) {
        return data === undefined;
    };
    return UndefinedType;
}());
exports.UndefinedType = UndefinedType;
exports.default = new UndefinedType();
