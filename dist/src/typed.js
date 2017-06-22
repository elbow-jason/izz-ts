"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FieldError = (function () {
    function FieldError(field, expected, got) {
        this.field = field;
        this.expected = expected;
        this.got = got;
    }
    return FieldError;
}());
exports.FieldError = FieldError;
var FieldContext = (function () {
    function FieldContext(field, typed, data) {
        this.field = field;
        this.typed = typed;
        this.data = data;
    }
    FieldContext.prototype.isValid = function () {
        return this.typed.isValid(this.data);
    };
    FieldContext.prototype.error = function () {
        if (this.isValid())
            return null;
        return this.asError();
    };
    FieldContext.prototype.asError = function () {
        return new FieldError(this.field, this.typed.name, this.data);
    };
    return FieldContext;
}());
exports.FieldContext = FieldContext;
var ValidationContext = (function () {
    function ValidationContext() {
        this.contexts = [];
    }
    ValidationContext.prototype.addFieldContext = function (field_context) {
        this.contexts.push(field_context);
    };
    ValidationContext.prototype.errors = function () {
        return this.contexts
            .filter(function (fc) { return !fc.isValid(); })
            .map(function (fc) { return fc.asError(); });
    };
    ValidationContext.prototype.hasErrors = function () {
        return (this.errors().length > 0);
    };
    ValidationContext.prototype.run = function (name, data, typed) {
        if (typed.validate(name, data)) { }
    };
    return ValidationContext;
}());
exports.ValidationContext = ValidationContext;
exports.fieldErrors = function (contexts) {
    var errors = [];
    contexts.forEach(function (fc) {
        var maybeError = fc.error();
        if (maybeError instanceof FieldError) {
            errors.push(maybeError);
        }
    });
    return errors;
};
var Typed = (function () {
    function Typed() {
    }
    Typed.prototype.context = function (field, data) {
        return [new FieldContext(field, this, data)];
    };
    Typed.prototype.validate = function (field, data) {
        return exports.fieldErrors(this.context(field, data));
    };
    Typed.prototype.isValid = function (data) {
        return false;
    };
    return Typed;
}());
exports.Typed = Typed;
