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
var LiteralType = (function (_super) {
    __extends(LiteralType, _super);
    function LiteralType(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.name = 'literal:' + JSON.stringify(value);
        return _this;
    }
    LiteralType.prototype.isValid = function (data) {
        return data === this.value;
    };
    return LiteralType;
}(typed_1.Typed));
exports.LiteralType = LiteralType;
var newLiteralType = function (value) {
    return new LiteralType(value);
};
exports.default = newLiteralType;
