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
var IzzNumberTest = (function () {
    function IzzNumberTest() {
    }
    IzzNumberTest.prototype["izz.number.isValid returns true for positive numbers"] = function () {
        if (izz.number.isValid(50) != true)
            failed("Failed on a positive numbers");
        if (izz.number.isValid(1.1) != true)
            failed("Failed on a positive numbers");
    };
    IzzNumberTest.prototype["izz.number.isValid returns true for negative numbers"] = function () {
        if (izz.number.isValid(-50) != true)
            failed("Failed on a negative numbers");
        if (izz.number.isValid(-1.23) != true)
            failed("Failed on a negative numbers");
    };
    IzzNumberTest.prototype["izz.number.isValid returns true for zero"] = function () {
        if (izz.number.isValid(0) != true)
            failed("Failed on 0");
        if (izz.number.isValid(0.0) != true)
            failed("Failed on 0.0");
    };
    IzzNumberTest.prototype["izz.number.isValid returns false for non-numbers"] = function () {
        var data = [
            "beef", true, false, null, { beef: false }, undefined, [{}], {}, [1, 2, 3]
        ];
        data.forEach(function (item) {
            if (izz.number.isValid(item))
                failed("Failed on non-string (" + JSON.stringify(item) + ")");
        });
    };
    IzzNumberTest.prototype["izz.number.validate returns an empty array for numbers"] = function () {
        var errors = izz.number.validate('zero', 0);
        if (errors.length > 0)
            failed("Failed on 0");
    };
    return IzzNumberTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzNumberTest.prototype, "izz.number.isValid returns true for positive numbers", null);
__decorate([
    mocha_typescript_1.test
], IzzNumberTest.prototype, "izz.number.isValid returns true for negative numbers", null);
__decorate([
    mocha_typescript_1.test
], IzzNumberTest.prototype, "izz.number.isValid returns true for zero", null);
__decorate([
    mocha_typescript_1.test
], IzzNumberTest.prototype, "izz.number.isValid returns false for non-numbers", null);
__decorate([
    mocha_typescript_1.test
], IzzNumberTest.prototype, "izz.number.validate returns an empty array for numbers", null);
IzzNumberTest = __decorate([
    mocha_typescript_1.suite
], IzzNumberTest);
