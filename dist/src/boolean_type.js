"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BooleanType {
    validate(data) {
        return typeof data === 'boolean';
    }
}
exports.BooleanType = BooleanType;
const booleanType = new BooleanType();
exports.default = booleanType;
