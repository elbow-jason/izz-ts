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
var IzzBooleanTest = (function () {
    function IzzBooleanTest() {
    }
    IzzBooleanTest.prototype["izz.boolean.isValid returns true for true"] = function () {
        if (izz.boolean.isValid(true) != true)
            failed("boolean failed on true");
    };
    IzzBooleanTest.prototype["izz.boolean.isValid returns true for false"] = function () {
        if (izz.boolean.isValid(false) != true)
            failed("boolean failed on false");
    };
    IzzBooleanTest.prototype["izz.boolean.isValid returns false for non-booleans"] = function () {
        var data = [
            "beef", "", -1, 0, 1, 2.0, 0.0, -1.3, null, { beef: false }, undefined, [{}], {},
        ];
        data.forEach(function (item) {
            if (izz.boolean.isValid(item))
                failed("Failed on non-boolean (" + JSON.stringify(item) + ")");
        });
    };
    IzzBooleanTest.prototype["izz.boolean.validate returns no error (null) for false"] = function () {
        var errors = izz.boolean.validate('ctx', false);
        if (errors.length > 0) {
            failed('izz.boolean.validate for false should have been null. got: ' + JSON.stringify(errors, null, 2));
        }
    };
    IzzBooleanTest.prototype["izz.boolean.validate returns no error (null) for true"] = function () {
        var errors = izz.boolean.validate('ctx', true);
        if (errors.length > 0) {
            failed('izz.boolean.validate for true should have been null. got: ' + JSON.stringify(errors, null, 2));
        }
    };
    IzzBooleanTest.prototype["izz.boolean.validate returns an error for non-boolean data"] = function () {
        var errors = izz.boolean.validate('ctx', 'fleep');
        if (errors.length !== 1)
            failed('izz.boolean.validate for \'fleep\' should not have produced an error. got: ' + JSON.stringify(errors, null, 2));
    };
    return IzzBooleanTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzBooleanTest.prototype, "izz.boolean.isValid returns true for true", null);
__decorate([
    mocha_typescript_1.test
], IzzBooleanTest.prototype, "izz.boolean.isValid returns true for false", null);
__decorate([
    mocha_typescript_1.test
], IzzBooleanTest.prototype, "izz.boolean.isValid returns false for non-booleans", null);
__decorate([
    mocha_typescript_1.test
], IzzBooleanTest.prototype, "izz.boolean.validate returns no error (null) for false", null);
__decorate([
    mocha_typescript_1.test
], IzzBooleanTest.prototype, "izz.boolean.validate returns no error (null) for true", null);
__decorate([
    mocha_typescript_1.test
], IzzBooleanTest.prototype, "izz.boolean.validate returns an error for non-boolean data", null);
IzzBooleanTest = __decorate([
    mocha_typescript_1.suite
], IzzBooleanTest);
