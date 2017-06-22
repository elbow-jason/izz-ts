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
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var NotPerson = (function () {
    function NotPerson(name) {
        this.legs = 4;
        this.name = name;
    }
    return NotPerson;
}());
var izzPerson = izz.object({ name: izz.string, age: izz.number });
var izzEmptyObject = izz.object({});
var IzzObjectTest = (function () {
    function IzzObjectTest() {
    }
    IzzObjectTest.prototype["izz.object.isValid returns true for valid objects (classes)"] = function () {
        var personInstance = new Person("Rick", 18);
        if (izzPerson.isValid(personInstance) != true)
            failed("Failed on a valid class object");
    };
    IzzObjectTest.prototype["izz.object.isValid returns true for valid objects (plain-old objects)"] = function () {
        var goodPerson = {
            name: "Rick",
            age: 18,
        };
        if (izzPerson.isValid(goodPerson) != true)
            failed("Failed on a valid plain-old object");
    };
    IzzObjectTest.prototype["izz.object.isValid returns true for valid empty"] = function () {
        if (izzEmptyObject.isValid({}) != true)
            failed("Failed on a valid empty object");
    };
    IzzObjectTest.prototype["izz.object.isValid returns false for non-objects"] = function () {
        var data = [
            -1, 1, 0, 10.12, -12.23, 0.0, "beef", true, false, null, undefined, [], [1, 2, 3, 4]
        ];
        data.forEach(function (item) {
            if (izzPerson.isValid(item))
                failed("Failed on non-object (" + JSON.stringify(item) + ")");
        });
    };
    IzzObjectTest.prototype["izz.object.isValid returns false for invalid objects"] = function () {
        var data = [
            {}, { name: "beef", age: "beef" }, { name: 1 }, { other: true }, new NotPerson("Harold")
        ];
        data.forEach(function (item) {
            if (izzPerson.isValid(item))
                failed("Failed to return false on invalid object (" + JSON.stringify(item) + ")");
        });
    };
    IzzObjectTest.prototype["izz.object.validate returns empty error array for valid objects"] = function () {
        var person = new Person('Jane', 34);
        var result = izzPerson.validate('person1', person);
        if (result.length > 0) {
            failed('result should have no errors upon validation. Got: ' + JSON.stringify(result));
        }
    };
    IzzObjectTest.prototype["izz.object.validate returns errors for invalid objects"] = function () {
        var not_person = {
            beef: true
        };
        var result = izzPerson.validate('not_person', not_person);
        if (result.length !== 2) {
            failed('not_person should have 2 errors upon validation. Got: ' + JSON.stringify(result));
        }
    };
    IzzObjectTest.prototype["izz.object.validate returns valid errors for invalid objects"] = function () {
        var numVal = izz.object({ value: izz.number });
        var errors = numVal.validate('undef', undefined);
        var error = errors[0];
        if (error.field !== 'undef')
            failed('object error had invalid \'field\' value. Error was:' + JSON.stringify(error));
        if (error.expected !== 'object')
            failed('object error had invalid \'expected\' value. Error was:' + JSON.stringify(error));
        if (error.got !== undefined)
            failed('object error had invalid \'got\' value. Error was:' + JSON.stringify(error));
    };
    IzzObjectTest.prototype["izz.object.validate returns valid errors for invalid fields of objects"] = function () {
        var numVal = izz.object({ value: izz.number });
        var errors = numVal.validate('bad_data', { value: undefined });
        var error = errors[0];
        if (error.field !== 'bad_data.value')
            failed('object error had invalid \'field\' value: ' + JSON.stringify(error.field));
        if (error.expected !== 'number')
            failed('object error had invalid \'expected\' value: ' + JSON.stringify(error.expected));
        if (error.got !== undefined)
            failed('object error had invalid \'got\' value: ' + JSON.stringify(error.got));
    };
    return IzzObjectTest;
}());
__decorate([
    mocha_typescript_1.test
], IzzObjectTest.prototype, "izz.object.isValid returns true for valid objects (classes)", null);
__decorate([
    mocha_typescript_1.test
], IzzObjectTest.prototype, "izz.object.isValid returns true for valid objects (plain-old objects)", null);
__decorate([
    mocha_typescript_1.test
], IzzObjectTest.prototype, "izz.object.isValid returns true for valid empty", null);
__decorate([
    mocha_typescript_1.test
], IzzObjectTest.prototype, "izz.object.isValid returns false for non-objects", null);
__decorate([
    mocha_typescript_1.test
], IzzObjectTest.prototype, "izz.object.isValid returns false for invalid objects", null);
__decorate([
    mocha_typescript_1.test
], IzzObjectTest.prototype, "izz.object.validate returns empty error array for valid objects", null);
__decorate([
    mocha_typescript_1.test
], IzzObjectTest.prototype, "izz.object.validate returns errors for invalid objects", null);
__decorate([
    mocha_typescript_1.test
], IzzObjectTest.prototype, "izz.object.validate returns valid errors for invalid objects", null);
__decorate([
    mocha_typescript_1.test
], IzzObjectTest.prototype, "izz.object.validate returns valid errors for invalid fields of objects", null);
IzzObjectTest = __decorate([
    mocha_typescript_1.suite
], IzzObjectTest);
