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
var AnyType = (function (_super) {
    __extends(AnyType, _super);
    function AnyType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'any';
        return _this;
    }
    AnyType.prototype.isValid = function (data) {
        return true;
    };
    return AnyType;
}(typed_1.Typed));
exports.AnyType = AnyType;
exports.default = new AnyType();
