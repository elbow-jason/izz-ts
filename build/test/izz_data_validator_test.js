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
var izzAnimal = izz.object({
    isHairy: izz.boolean,
    legs: izz.number,
    eats: izz.array(izz.string)
});
var Animal = (function () {
    function Animal() {
        this.isHairy = true;
        this.legs = 4;
    }
    Animal.prototype.hasLegs = function () {
        return this.legs > 0;
    };
    return Animal;
}());
var animalValidator = new izz.DataValidator(izzAnimal);
var animalHasLegs = function (animal) {
    return animal.hasLegs();
};
var IzzDataValidatorTest = (function () {
    function IzzDataValidatorTest() {
    }
    IzzDataValidatorTest.prototype["izz DataValidator works"] = function () {
        var maybeAnimal = {
            "isHairy": true,
            "legs": 2,
            "eats": ["meat", "veggies"]
        };
        var isAnimal = animalValidator.validate(maybeAnimal);
        if (isAnimal != true) {
            failed("Validator did not validate correctly");
        }
        var nonAnimal = {
            shimmy: true
        };
        var notAnimal = animalValidator.validate(nonAnimal);
        if (notAnimal != false) {
            failed("Validator did not invalidate correctly");
        }
    };
    return IzzDataValidatorTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzDataValidatorTest.prototype, "izz DataValidator works", null);
IzzDataValidatorTest = __decorate([
    mocha_typescript_1.suite
], IzzDataValidatorTest);
