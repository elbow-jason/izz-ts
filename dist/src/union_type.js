"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnionType {
    constructor(types) {
        this.types = types;
    }
    validate(data) {
        return this.types.some((typed) => typed.validate(data));
    }
}
exports.UnionType = UnionType;
const newUnionType = (types) => {
    return new UnionType(types);
};
exports.default = newUnionType;
