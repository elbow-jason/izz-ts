"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionalType = (function () {
    function OptionalType(typed) {
        this.typed = typed;
    }
    OptionalType.prototype.validate = function (data) {
        return this.typed.validate(data) || (data === undefined);
    };
    return OptionalType;
}());
exports.OptionalType = OptionalType;
var newOptionalType = function (typed) {
    return new OptionalType(typed);
};
exports.default = newOptionalType;
