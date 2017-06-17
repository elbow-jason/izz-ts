"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LiteralType = (function () {
    function LiteralType(value) {
        this.value = value;
    }
    LiteralType.prototype.validate = function (data) {
        return data === this.value;
    };
    return LiteralType;
}());
exports.LiteralType = LiteralType;
var newLiteralType = function (value) {
    return new LiteralType(value);
};
exports.default = newLiteralType;
