"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typed_1 = require("./typed");
var getTyped = function (obj, field) {
    var typed = obj[field];
    return typed;
};
var getData = function (data, field) {
    return data[field];
};
var ObjectType = (function (_super) {
    __extends(ObjectType, _super);
    function ObjectType(fields) {
        if (fields === void 0) { fields = {}; }
        var _this = _super.call(this) || this;
        _this.name = 'object';
        _this.fields = fields;
        return _this;
    }
    ObjectType.prototype.isValid = function (data) {
        return (this.isObjecty(data) && this.validateFields(data));
    };
    ObjectType.prototype.isObjecty = function (data) {
        return (typeof data === 'object' && !Array.isArray(data) && (data != null));
    };
    ObjectType.prototype.validateFields = function (data) {
        for (var field in this.fields) {
            if (this.fields.hasOwnProperty(field)) {
                var value = getData(data, field);
                var typed = getTyped(this.fields, field);
                var validated = typed.isValid(value);
                if (validated === false) {
                    return false;
                }
            }
        }
        return true;
    };
    ObjectType.prototype.context = function (parent_field, data) {
        if (this.isObjecty(data)) {
            var contexts = [];
            for (var field in this.fields) {
                if (this.fields.hasOwnProperty(field)) {
                    var value = getData(data, field);
                    var typed = getTyped(this.fields, field);
                    var ctx = new typed_1.FieldContext(parent_field + "." + field, typed, value);
                    if (ctx.error())
                        contexts.push(ctx);
                }
            }
            return contexts;
        }
        else {
            return [new typed_1.FieldContext(parent_field, this, data)];
        }
    };
    ObjectType.prototype.validate = function (parent_field, data) {
        return typed_1.fieldErrors(this.context(parent_field, data));
    };
    return ObjectType;
}(typed_1.Typed));
exports.ObjectType = ObjectType;
var newObjectType = function (fields) {
    return new ObjectType(fields);
};
exports.default = newObjectType;
