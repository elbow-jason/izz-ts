"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UndefinedType {
    validate(data) {
        return data === undefined;
    }
}
exports.UndefinedType = UndefinedType;
exports.default = new UndefinedType();
