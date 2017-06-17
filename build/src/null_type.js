"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NullType = (function () {
    function NullType() {
    }
    NullType.prototype.validate = function (data) {
        return data === null;
    };
    return NullType;
}());
exports.NullType = NullType;
var nullType = new NullType();
exports.default = nullType;
