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
var numStr = izz.union([izz.number, izz.string]);
var IzzUnionTest = (function () {
    function IzzUnionTest() {
    }
    IzzUnionTest.prototype["izz.union.isValid returns true for any valid Typed union"] = function () {
        if (numStr.isValid(1) !== true)
            failed("numStr union should allow numbers");
        if (numStr.isValid('dog') !== true)
            failed("numStr union should allow strings");
    };
    IzzUnionTest.prototype["izz.union.isValid returns false for any invalid type"] = function () {
        if (numStr.isValid(true) !== false)
            failed("numStr union should not allow true");
        if (numStr.isValid(false) !== false)
            failed("numStr union should not allow false");
        if (numStr.isValid(null) !== false)
            failed("numStr union should not allow null");
        if (numStr.isValid(undefined) !== false)
            failed("numStr union should not allow undefined");
        if (numStr.isValid({ "beef": "dog" }) !== false)
            failed("numStr union should not allow objects");
    };
    IzzUnionTest.prototype["izz.union.validate returns no errors for valid data"] = function () {
        var errors = numStr.validate('bad_data', true);
        if (errors.length != 1)
            failed("numStr.validate union should return an error on true. Got: " + JSON.stringify(errors, null, 2));
    };
    return IzzUnionTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzUnionTest.prototype, "izz.union.isValid returns true for any valid Typed union", null);
__decorate([
    mocha_typescript_1.test
], IzzUnionTest.prototype, "izz.union.isValid returns false for any invalid type", null);
__decorate([
    mocha_typescript_1.test
], IzzUnionTest.prototype, "izz.union.validate returns no errors for valid data", null);
IzzUnionTest = __decorate([
    mocha_typescript_1.suite
], IzzUnionTest);
