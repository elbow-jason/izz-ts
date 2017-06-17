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
var literallyDog = izz.literal('dog');
var literally100 = izz.literal(100);
var literallyTrue = izz.literal(true);
var IzzLiteralTest = (function () {
    function IzzLiteralTest() {
    }
    IzzLiteralTest.prototype["izz.literal.validate returns true for correct strings ('dog')"] = function () {
        if (literallyDog.validate('dog') != true)
            failed("literally 'dog' failed on 'dog'");
    };
    IzzLiteralTest.prototype["izz.boolean.validate (string) returns false for invalid others"] = function () {
        var data = [
            "beef", "", -1, 0, 1, 2.0, 0.0, -1.3, null, { beef: false }, undefined, [{}], {},
        ];
        data.forEach(function (item) {
            if (literallyDog.validate(item))
                failed("Failed on other value (" + JSON.stringify(item) + ")");
        });
    };
    IzzLiteralTest.prototype["izz.literal.validate returns true for correct number (100)"] = function () {
        if (literally100.validate(100) != true)
            failed("literally 100 failed on 100");
    };
    IzzLiteralTest.prototype["izz.boolean.validate (number) returns false for invalid others"] = function () {
        var data = [
            "beef", "", -1, 0, 2, 2.0, 0.0, -1.3, null, true, false, { beef: false }, undefined, [{}], {},
        ];
        data.forEach(function (item) {
            if (literallyDog.validate(item))
                failed("Failed on other value (" + JSON.stringify(item) + ")");
        });
    };
    IzzLiteralTest.prototype["izz.literal.validate returns true for correct boolean (true)"] = function () {
        if (literallyTrue.validate(true) != true)
            failed("literally true failed on true");
    };
    IzzLiteralTest.prototype["izz.boolean.validate (boolean) returns false for invalid others"] = function () {
        var data = [
            "beef", "", -1, 0, 2, 2.0, 0.0, -1.3, null, false, { beef: false }, undefined, [{}], {},
        ];
        data.forEach(function (item) {
            if (literallyDog.validate(item))
                failed("Failed on other value (" + JSON.stringify(item) + ")");
        });
    };
    return IzzLiteralTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzLiteralTest.prototype, "izz.literal.validate returns true for correct strings ('dog')", null);
__decorate([
    mocha_typescript_1.test
], IzzLiteralTest.prototype, "izz.boolean.validate (string) returns false for invalid others", null);
__decorate([
    mocha_typescript_1.test
], IzzLiteralTest.prototype, "izz.literal.validate returns true for correct number (100)", null);
__decorate([
    mocha_typescript_1.test
], IzzLiteralTest.prototype, "izz.boolean.validate (number) returns false for invalid others", null);
__decorate([
    mocha_typescript_1.test
], IzzLiteralTest.prototype, "izz.literal.validate returns true for correct boolean (true)", null);
__decorate([
    mocha_typescript_1.test
], IzzLiteralTest.prototype, "izz.boolean.validate (boolean) returns false for invalid others", null);
IzzLiteralTest = __decorate([
    mocha_typescript_1.suite
], IzzLiteralTest);
