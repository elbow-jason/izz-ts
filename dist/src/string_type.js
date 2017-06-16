"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringType {
    validate(data) {
        return typeof data === 'string';
    }
}
exports.StringType = StringType;
exports.default = new StringType();
