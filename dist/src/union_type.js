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
var UnionType = (function (_super) {
    __extends(UnionType, _super);
    function UnionType(types) {
        var _this = _super.call(this) || this;
        _this.types = types;
        _this.name = _this.generateName();
        return _this;
    }
    UnionType.prototype.generateName = function () {
        return '(' + this.types.map(function (typed) { return typed.name; }).join('|') + ')';
    };
    UnionType.prototype.isValid = function (data) {
        return this.types.some(function (typed) { return typed.isValid(data); });
    };
    return UnionType;
}(typed_1.Typed));
exports.UnionType = UnionType;
var newUnionType = function (types) {
    return new UnionType(types);
};
exports.default = newUnionType;
