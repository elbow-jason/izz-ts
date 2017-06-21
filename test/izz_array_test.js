"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_typescript_1 = require("mocha-typescript");
const izz = require("../src");
const failed = (reason) => {
    throw new Error(reason);
};
const izzNumberArray = izz.array(izz.number);
let IzzArrayTest = class IzzArrayTest {
    "izz.array.isValid returns true for valid arrays" () {
        if (izzNumberArray.isValid([1, 2, 3]) != true)
            failed("Failed on a valid number array");
    }
    "izz.array.isValid returns true for empty array" () {
        if (izzNumberArray.isValid([]) != true)
            failed("Failed on a empty array");
    }
    "izz.array.isValid returns false for non-arrays" () {
        let data = [-1, 1, 0, 10.12, -12.23, 0.0, "beef", true, false, null, undefined, {}, { ok: true }];
        data.forEach((item) => {
            if (izzNumberArray.isValid(item))
                failed(`Failed on non-array (${JSON.stringify(item)})`);
        });
    }
    "izz.array.isValid returns false for invalid arrays" () {
        let data = [
            ["invalid", "here"],
            [true, true, false],
            [null, { one: "two" }],
            [1, 2, 3, "invalid!!"],
        ];
        data.forEach((item) => {
            if (izzNumberArray.isValid(item))
                failed(`Failed on invalid array (${JSON.stringify(item)})`);
        });
    }
};
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
IzzArrayTest = __decorate([
    mocha_typescript_1.suite
], IzzArrayTest);