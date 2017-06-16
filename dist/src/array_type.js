"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayType {
    constructor(typed) {
        this.typed = typed;
    }
    validate(data) {
        return Array.isArray(data) && this.validateElements(data);
    }
    validateElements(data) {
        return data.every((item) => {
            return this.typed.validate(item);
        });
    }
}
exports.ArrayType = ArrayType;
const newArrayType = (typed) => {
    return new ArrayType(typed);
};
exports.default = newArrayType;
