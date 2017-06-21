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
var BooleanType = (function (_super) {
    __extends(BooleanType, _super);
    function BooleanType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'boolean';
        return _this;
    }
    BooleanType.prototype.isValid = function (data) {
        return typeof data === 'boolean';
    };
    return BooleanType;
}(typed_1.Typed));
exports.BooleanType = BooleanType;
exports.default = new BooleanType();
