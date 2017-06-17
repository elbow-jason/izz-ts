"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnyType = (function () {
    function AnyType() {
    }
    AnyType.prototype.validate = function (data) {
        return true;
    };
    return AnyType;
}());
exports.AnyType = AnyType;
var anyType = new AnyType();
exports.default = anyType;
