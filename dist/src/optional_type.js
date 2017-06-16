var OptionalType = (function () {
    function OptionalType(typed) {
        this.typed = typed;
    }
    OptionalType.prototype.validate = function (data) {
        return this.typed.validate(data) || (data === undefined);
    };
    return OptionalType;
}());
export { OptionalType };
var newOptionalType = function (typed) {
    return new OptionalType(typed);
};
export default newOptionalType;
//# sourceMappingURL=optional_type.js.map