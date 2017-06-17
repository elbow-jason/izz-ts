"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberType = (function () {
    function NumberType() {
    }
    NumberType.prototype.validate = function (data) {
        return typeof data === 'number';
    };
    return NumberType;
}());
exports.NumberType = NumberType;
exports.default = new NumberType();
