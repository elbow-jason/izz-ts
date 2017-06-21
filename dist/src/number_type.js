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
var NumberType = (function (_super) {
    __extends(NumberType, _super);
    function NumberType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'number';
        return _this;
    }
    NumberType.prototype.isValid = function (data) {
        return typeof data === 'number';
    };
    return NumberType;
}(typed_1.Typed));
exports.NumberType = NumberType;
exports.default = new NumberType();
