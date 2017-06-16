"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OptionalType {
    constructor(typed) {
        this.typed = typed;
    }
    validate(data) {
        return this.typed.validate(data) || (data === undefined);
    }
}
exports.OptionalType = OptionalType;
const newOptionalType = (typed) => {
    return new OptionalType(typed);
};
exports.default = newOptionalType;
