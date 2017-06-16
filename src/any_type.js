"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnyType {
    validate(data) {
        return true;
    }
}
exports.AnyType = AnyType;
const anyType = new AnyType();
exports.default = anyType;
