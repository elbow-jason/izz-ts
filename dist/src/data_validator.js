"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataValidator = (function () {
    function DataValidator(name, typed, data) {
        this.errors = [];
        this.name = name;
        this.typed = typed;
        this.data = data;
        this.errors = this.typed.validate(this.name, this.data);
    }
    DataValidator.prototype.isValid = function () {
        return (this.errors.length === 0);
    };
    return DataValidator;
}());
exports.DataValidator = DataValidator;
