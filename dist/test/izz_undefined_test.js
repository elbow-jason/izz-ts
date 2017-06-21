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
var IzzUndefinedTest = (function () {
    function IzzUndefinedTest() {
    }
    IzzUndefinedTest.prototype["izz.undefined.isValid returns true for undefined"] = function () {
        if (izz.undefined.isValid(undefined) != true)
            failed("Failed on undefined");
    };
    IzzUndefinedTest.prototype["izz.undefined.isValid returns false for non-undefineds"] = function () {
        var data = [
            "beef", "", -1, 0, 1, 1.0, -1.0, 0.0, { beef: false }, null, [{}], {},
        ];
        data.forEach(function (item) {
            if (izz.undefined.isValid(item))
                failed("Failed on non-undefined (" + JSON.stringify(item) + ")");
        });
    };
    return IzzUndefinedTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzUndefinedTest.prototype, "izz.undefined.isValid returns true for undefined", null);
__decorate([
    mocha_typescript_1.test
], IzzUndefinedTest.prototype, "izz.undefined.isValid returns false for non-undefineds", null);
IzzUndefinedTest = __decorate([
    mocha_typescript_1.suite
], IzzUndefinedTest);
