var NumberType = (function () {
    function NumberType() {
    }
    NumberType.prototype.validate = function (data) {
        return typeof data === 'number';
    };
    return NumberType;
}());
export { NumberType };
export default new NumberType();
//# sourceMappingURL=number_type.js.map