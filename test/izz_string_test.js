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
let IzzStringTest = class IzzStringTest {
    "izz.string.validate returns true for empty strings"() {
        if (izz.string.validate("") != true)
            failed("Failed on an empty string");
    }
    "izz.string.validate returns true for normal strings"() {
        if (izz.string.validate("a longer string") != true)
            failed("Failed on a normal string");
    }
    "izz.string.validate returns false for non-strings"() {
        let data = [
            0, 1, true, false, null, { beef: false }, undefined, [{}], {},
        ];
        if (data.some(izz.string.validate))
            failed("Failed on non-string");
    }
};
__decorate([
    mocha_typescript_1.test
], IzzStringTest.prototype, "izz.string.validate returns true for empty strings", null);
__decorate([
    mocha_typescript_1.test
], IzzStringTest.prototype, "izz.string.validate returns true for normal strings", null);
__decorate([
    mocha_typescript_1.test
], IzzStringTest.prototype, "izz.string.validate returns false for non-strings", null);
IzzStringTest = __decorate([
    mocha_typescript_1.suite
], IzzStringTest);
