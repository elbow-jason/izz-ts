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
    IzzArrayTest.prototype["izz.array.isValid returns true for valid arrays"] = function () {
        if (izzNumberArray.isValid([1, 2, 3]) != true)
            failed("Failed on a valid number array");
    };
    IzzArrayTest.prototype["izz.array.isValid returns true for empty array"] = function () {
        if (izzNumberArray.isValid([]) != true)
            failed("Failed on a empty array");
    };
    IzzArrayTest.prototype["izz.array.isValid returns false for non-arrays"] = function () {
        var data = [
            -1, 1, 0, 10.12, -12.23, 0.0, "beef", true, false, null, undefined, {}, { ok: true }
        ];
        data.forEach(function (item) {
            if (izzNumberArray.isValid(item))
                failed("Failed on non-array (" + JSON.stringify(item) + ")");
        });
    };
    IzzArrayTest.prototype["izz.array.isValid returns false for invalid arrays"] = function () {
        var data = [
            ["invalid", "here"],
            [true, true, false],
            [null, { one: "two" }],
            [1, 2, 3, "invalid!!"],
        ];
        data.forEach(function (item) {
            if (izzNumberArray.isValid(item))
                failed("Failed on invalid array (" + JSON.stringify(item) + ")");
        });
    };
    IzzArrayTest.prototype["izz.array.validate returns errors for invalid arrays"] = function () {
        var data = [
            ["invalid", "here"],
            [true, true, false],
            [null, { one: "two" }],
            [1, 2, 3, "invalid!!"],
        ];
        data.forEach(function (item, index) {
            var errors = izzNumberArray.validate('item' + index, item);
            if (errors.length === 0) {
                failed("Failed on invalid array (" + JSON.stringify(item, null, 2) + ") with errors " + JSON.stringify(errors, null, 2));
            }
        });
    };
    IzzArrayTest.prototype["izz.array.validate returns no errors for valid arrays"] = function () {
        var good_array1 = [1, 2, 3];
        var errors1 = izzNumberArray.validate("good_array1", good_array1);
        if (errors1.length > 0)
            failed("Failed on valid array. Expected: [] ... Got: " + JSON.stringify(errors1, null, 2));
        var good_array2 = [1.0, 0.1, 100.1];
        var errors2 = izzNumberArray.validate("good_array2", good_array2);
        if (errors2.length > 0)
            failed("Failed on valid array. Expected: [] ... Got: " + JSON.stringify(errors2, null, 2));
    };
    return IzzArrayTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.isValid returns true for valid arrays", null);
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.isValid returns true for empty array", null);
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.isValid returns false for non-arrays", null);
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.isValid returns false for invalid arrays", null);
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.validate returns errors for invalid arrays", null);
__decorate([
    mocha_typescript_1.test
], IzzArrayTest.prototype, "izz.array.validate returns no errors for valid arrays", null);
IzzArrayTest = __decorate([
    mocha_typescript_1.suite
], IzzArrayTest);
