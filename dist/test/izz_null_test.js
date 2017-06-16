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
let IzzNullTest = class IzzNullTest {
    "izz.null.validate returns true for null"() {
        if (izz.null.validate(null) != true)
            failed("Failed on null");
    }
    "izz.null.validate returns false for non-nulls"() {
        let data = [
            "beef", "", -1, 0, 1, 1.0, -1.0, 0.0, false, true, undefined, { beef: false }, [{}], {},
        ];
        data.forEach((item) => {
            if (izz.null.validate(item))
                failed(`Failed on non-null (${JSON.stringify(item)})`);
        });
    }
};
__decorate([
    mocha_typescript_1.test
], IzzNullTest.prototype, "izz.null.validate returns true for null", null);
__decorate([
    mocha_typescript_1.test
], IzzNullTest.prototype, "izz.null.validate returns false for non-nulls", null);
IzzNullTest = __decorate([
    mocha_typescript_1.suite
], IzzNullTest);
