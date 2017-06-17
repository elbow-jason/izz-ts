"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnionType = (function () {
    function UnionType(types) {
        this.types = types;
    }
    UnionType.prototype.validate = function (data) {
        return this.types.some(function (typed) { return typed.validate(data); });
    };
    return UnionType;
}());
exports.UnionType = UnionType;
var newUnionType = function (types) {
    return new UnionType(types);
};
exports.default = newUnionType;
