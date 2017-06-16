"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberType {
    validate(data) {
        return typeof data === 'number';
    }
}
exports.NumberType = NumberType;
exports.default = new NumberType();
