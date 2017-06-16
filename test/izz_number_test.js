"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_typescript_1 = require("mocha-typescript");
const izz = require("../src");
const failed = (reason) => {
    throw new Error(reason);
};
let IzzNumberTest = class IzzNumberTest {
    "izz.number.validate returns true for positive numbers"() {
        if (izz.number.validate(50) != true)
            failed("Failed on a positive numbers");
        if (izz.number.validate(1.1) != true)
            failed("Failed on a positive numbers");
    }
    "izz.number.validate returns true for negative numbers"() {
        if (izz.number.validate(-50) != true)
            failed("Failed on a negative numbers");
        if (izz.number.validate(-1.23) != true)
            failed("Failed on a negative numbers");
    }
    "izz.number.validate returns true for zero"() {
        if (izz.number.validate(0) != true)
            failed("Failed on 0");
        if (izz.number.validate(0.0) != true)
            failed("Failed on 0.0");
    }
    "izz.number.validate returns false for non-numbers"() {
        let data = [
            "beef", true, false, null, { beef: false }, undefined, [{}], {},
        ];
        data.forEach((item) => {
            if (izz.number.validate(item))
                failed(`Failed on non-string (${JSON.stringify(item)})`);
        });
    }
};
__decorate([
    mocha_typescript_1.test
], IzzNumberTest.prototype, "izz.number.validate returns true for positive numbers", null);
__decorate([
    mocha_typescript_1.test
], IzzNumberTest.prototype, "izz.number.validate returns true for negative numbers", null);
__decorate([
    mocha_typescript_1.test
], IzzNumberTest.prototype, "izz.number.validate returns true for zero", null);
__decorate([
    mocha_typescript_1.test
], IzzNumberTest.prototype, "izz.number.validate returns false for non-numbers", null);
IzzNumberTest = __decorate([
    mocha_typescript_1.suite
], IzzNumberTest);
