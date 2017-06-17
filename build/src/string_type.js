"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringType = (function () {
    function StringType() {
    }
    StringType.prototype.validate = function (data) {
        return typeof data === 'string';
    };
    return StringType;
}());
exports.StringType = StringType;
exports.default = new StringType();
