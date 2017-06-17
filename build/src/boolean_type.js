"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BooleanType = (function () {
    function BooleanType() {
    }
    BooleanType.prototype.validate = function (data) {
        return typeof data === 'boolean';
    };
    return BooleanType;
}());
exports.BooleanType = BooleanType;
var booleanType = new BooleanType();
exports.default = booleanType;
