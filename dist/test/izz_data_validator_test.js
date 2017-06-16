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
const izzAnimal = izz.object({
    isHairy: izz.boolean,
    legs: izz.number,
    eats: izz.array(izz.string)
});
class Animal {
    constructor() {
        this.isHairy = true;
        this.legs = 4;
    }
    hasLegs() {
        return this.legs > 0;
    }
}
const animalValidator = new izz.DataValidator(izzAnimal);
const animalHasLegs = (animal) => {
    return animal.hasLegs();
};
let IzzDataValidatorTest = class IzzDataValidatorTest {
    "izz DataValidator works"() {
        const maybeAnimal = {
            "isHairy": true,
            "legs": 2,
            "eats": ["meat", "veggies"]
        };
        const isAnimal = animalValidator.validate(maybeAnimal);
        if (isAnimal != true) {
            failed("Validator did not validate correctly");
        }
        let nonAnimal = {
            shimmy: true
        };
        const notAnimal = animalValidator.validate(nonAnimal);
        if (notAnimal != false) {
            failed("Validator did not invalidate correctly");
        }
    }
};
__decorate([
    mocha_typescript_1.test
], IzzDataValidatorTest.prototype, "izz DataValidator works", null);
IzzDataValidatorTest = __decorate([
    mocha_typescript_1.suite
], IzzDataValidatorTest);
