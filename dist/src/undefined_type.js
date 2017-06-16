var UndefinedType = (function () {
    function UndefinedType() {
    }
    UndefinedType.prototype.validate = function (data) {
        return data === undefined;
    };
    return UndefinedType;
}());
export { UndefinedType };
export default new UndefinedType();
//# sourceMappingURL=undefined_type.js.map