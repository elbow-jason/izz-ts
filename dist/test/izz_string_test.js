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
var IzzStringTest = (function () {
    function IzzStringTest() {
    }
    IzzStringTest.prototype["izz.string.isValid returns true for empty strings"] = function () {
        if (izz.string.isValid("") != true)
            failed("Failed on an empty string");
    };
    IzzStringTest.prototype["izz.string.isValid returns true for normal strings"] = function () {
        if (izz.string.isValid("a longer string") != true)
            failed("Failed on a normal string");
    };
    IzzStringTest.prototype["izz.string.isValid returns false for non-strings"] = function () {
        var data = [
            0.0, -1.23, 1.23, -1, 0, 1, true, false, null, { beef: false }, undefined, [{}], {},
        ];
        data.forEach(function (item) {
            if (izz.string.isValid(item))
                failed("Failed on non-string (" + JSON.stringify(item) + ")");
        });
    };
    return IzzStringTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzStringTest.prototype, "izz.string.isValid returns true for empty strings", null);
__decorate([
    mocha_typescript_1.test
], IzzStringTest.prototype, "izz.string.isValid returns true for normal strings", null);
__decorate([
    mocha_typescript_1.test
], IzzStringTest.prototype, "izz.string.isValid returns false for non-strings", null);
IzzStringTest = __decorate([
    mocha_typescript_1.suite
], IzzStringTest);
