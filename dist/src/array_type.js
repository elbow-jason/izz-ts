"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typed_1 = require("./typed");
var ArrayType = (function () {
    function ArrayType(typed) {
        this.name = 'array';
        this.typed = typed;
    }
    ArrayType.prototype.isValid = function (data) {
        return Array.isArray(data) && this.isValidElements(data);
    };
    ArrayType.prototype.isValidElements = function (data) {
        var _this = this;
        return data.every(function (item) {
            return _this.typed.isValid(item);
        });
    };
    ArrayType.prototype.context = function (field, data) {
        var _this = this;
        if (Array.isArray(data)) {
            return data.map(function (item, index) {
                return _this.contextElement(field + "[" + index + "]", item);
            });
        }
        else {
            return [this.contextElement(field, data)];
        }
    };
    ArrayType.prototype.contextElement = function (field, data) {
        return new typed_1.FieldContext(field, this.typed, data);
    };
    ArrayType.prototype.validate = function (field, data) {
        return typed_1.fieldErrors(this.context(field, data));
    };
    return ArrayType;
}());
exports.ArrayType = ArrayType;
var newArrayType = function (typed) {
    return new ArrayType(typed);
};
exports.default = newArrayType;
