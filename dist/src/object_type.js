"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getTyped = function (obj, field) {
    var typed = obj[field];
    return typed;
};
var getData = function (data, field) {
    return data[field];
};
var ObjectType = (function () {
    function ObjectType(fields) {
        if (fields === void 0) { fields = {}; }
        this.fields = fields;
    }
    ObjectType.prototype.validate = function (data) {
        return (typeof data === 'object' && !Array.isArray(data) && (data != null) && this.validateFields(data));
    };
    ObjectType.prototype.validateFields = function (data) {
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
    return ObjectType;
}());
exports.ObjectType = ObjectType;
var newObjectType = function (fields) {
    return new ObjectType(fields);
};
exports.default = newObjectType;
