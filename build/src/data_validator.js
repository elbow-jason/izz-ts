"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataValidator = (function () {
    function DataValidator(typed) {
        this.typed = typed;
    }
    DataValidator.prototype.validate = function (data) {
        return this.typed.validate(data);
    };
    return DataValidator;
}());
exports.default = DataValidator;
