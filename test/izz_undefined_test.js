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
let IzzUndefinedTest = class IzzUndefinedTest {
    "izz.undefined.validate returns true for undefined"() {
        if (izz.undefined.validate(undefined) != true)
            failed("Failed on undefined");
    }
    "izz.undefined.validate returns false for non-undefineds"() {
        let data = [
            "beef", "", -1, 0, 1, 1.0, -1.0, 0.0, { beef: false }, null, [{}], {},
        ];
        data.forEach((item) => {
            if (izz.undefined.validate(item))
                failed(`Failed on non-undefined (${JSON.stringify(item)})`);
        });
    }
};
__decorate([
    mocha_typescript_1.test
], IzzUndefinedTest.prototype, "izz.undefined.validate returns true for undefined", null);
__decorate([
    mocha_typescript_1.test
], IzzUndefinedTest.prototype, "izz.undefined.validate returns false for non-undefineds", null);
IzzUndefinedTest = __decorate([
    mocha_typescript_1.suite
], IzzUndefinedTest);
