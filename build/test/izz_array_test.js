"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_typescript_1 = require("mocha-typescript");
var izz = require("../src");
var failed = function (reason) {
    throw new Error(reason);
};
var izzNumberArray = izz.array(izz.number);
var IzzArrayTest = (function () {
    function IzzArrayTest() {
    }
    IzzArrayTest.prototype["izz.array.validate returns true for valid arrays"] = function () {
        if (izzNumberArray.validate([1, 2, 3]) != true)
            failed("Failed on a valid number array");
    };
    IzzArrayTest.prototype["izz.array.validate returns true for empty array"] = function () {
        if (izzNumberArray.validate([]) != true)
            failed("Failed on a empty array");
    };
    IzzArrayTest.prototype["izz.array.validate returns false for non-arrays"] = function () {
        var data = [
            -1, 1, 0, 10.12, -12.23, 0.0, "beef", true, false, null, undefined, {}, { ok: true }
        ];
        data.forEach(function (item) {
            if (izzNumberArray.validate(item))
                failed("Failed on non-array (" + JSON.stringify(item) + ")");
        });
    };
    IzzArrayTest.prototype["izz.array.validate returns false for invalid arrays"] = function () {
        var data = [
            ["invalid", "here"],
            [true, true, false],
            [null, { one: "two" }],
            [1, 2, 3, "invalid!!"],
        ];
        data.forEach(function (item) {
            if (izzNumberArray.validate(item))
                failed("Failed on invalid array (" + JSON.stringify(item) + ")");
        });
    };
    return IzzArrayTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.validate returns true for valid arrays", null);
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.validate returns true for empty array", null);
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.validate returns false for non-arrays", null);
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.validate returns false for invalid arrays", null);
IzzArrayTest = __decorate([
    mocha_typescript_1.suite
], IzzArrayTest);
