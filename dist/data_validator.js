var DataValidator = (function () {
    function DataValidator(typed) {
        this.typed = typed;
    }
    DataValidator.prototype.validate = function (data) {
        return this.typed.validate(data);
    };
    return DataValidator;
}());
export { DataValidator };
//# sourceMappingURL=data_validator.js.map