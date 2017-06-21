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
var IzzNullTest = (function () {
    function IzzNullTest() {
    }
    IzzNullTest.prototype["izz.null.isValid returns true for null"] = function () {
        if (izz.null.isValid(null) != true)
            failed("Failed on null");
    };
    IzzNullTest.prototype["izz.null.isValid returns false for non-nulls"] = function () {
        var data = [
            "beef", "", -1, 0, 1, 1.0, -1.0, 0.0, false, true, undefined, { beef: false }, [{}], {},
        ];
        data.forEach(function (item) {
            if (izz.null.isValid(item))
                failed("Failed on non-null (" + JSON.stringify(item) + ")");
        });
    };
    return IzzNullTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzNullTest.prototype, "izz.null.isValid returns true for null", null);
__decorate([
    mocha_typescript_1.test
], IzzNullTest.prototype, "izz.null.isValid returns false for non-nulls", null);
IzzNullTest = __decorate([
    mocha_typescript_1.suite
], IzzNullTest);
