"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getTyped = function (obj, field) {
    var typed = obj[field];
    return typed;
};
var getData = function (data, field) {
    return data[field];
};
var ObjectT = (function () {
    function ObjectT(fields) {
        if (fields === void 0) { fields = {}; }
        this.fields = fields;
    }
    ObjectT.prototype.validate = function (data) {
        return (typeof data === 'object' && !Array.isArray(data) && (data != null) && this.validateFields(data));
    };
    ObjectT.prototype.validateFields = function (data) {
        for (var prop in this.fields) {
            if (this.fields.hasOwnProperty(prop)) {
                var value = getData(data, prop);
                var typed = getTyped(this.fields, prop);
                var validated = typed.validate(value);
                if (validated === false) {
                    return false;
                }
            }
        }
        return true;
    };
    return ObjectT;
}());
exports.ObjectT = ObjectT;
var newObjectType = function (fields) {
    return new ObjectT(fields);
};
exports.default = newObjectType;
