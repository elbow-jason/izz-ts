"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataValidator = (function () {
    function DataValidator(named, typed, data) {
        this.errors = [];
        this.named = named;
        this.typed = typed;
        this.data = data;
        this.errors = this.typed.validate(this.named, this.data);
    }
    DataValidator.prototype.isValid = function () {
        return (this.errors.length === 0);
    };
    return DataValidator;
}());
exports.DataValidator = DataValidator;
