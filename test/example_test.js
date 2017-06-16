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
let IzzTest = class IzzTest {
    "izz.string.validate returns true for strings"() {
        const result1 = izz.string.validate("");
        if (result1 != true)
            throw new Error("Failed on an empty string");
        const result2 = izz.string.validate("a longer string");
        if (result2 != true)
            throw new Error("Failed on an string");
    }
};
__decorate([
    mocha_typescript_1.test
], IzzTest.prototype, "izz.string.validate returns true for strings", null);
IzzTest = __decorate([
    mocha_typescript_1.suite
], IzzTest);
