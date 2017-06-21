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
var OptionalType = (function (_super) {
    __extends(OptionalType, _super);
    function OptionalType(typed) {
        var _this = _super.call(this) || this;
        _this.typed = typed;
        _this.name = 'optional:' + typed.name;
        return _this;
    }
    OptionalType.prototype.isValid = function (data) {
        return this.typed.isValid(data) || (data === undefined);
    };
    return OptionalType;
}(typed_1.Typed));
exports.OptionalType = OptionalType;
var newOptionalType = function (typed) {
    return new OptionalType(typed);
};
exports.default = newOptionalType;
