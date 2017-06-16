"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NullType {
    validate(data) {
        return data === null;
    }
}
exports.NullType = NullType;
const nullType = new NullType();
exports.default = nullType;
