"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataValidator {
    constructor(typed) {
        this.typed = typed;
    }
    validate(data) {
        return this.typed.validate(data);
    }
}
exports.default = DataValidator;
