var StringType = (function () {
    function StringType() {
    }
    StringType.prototype.validate = function (data) {
        return typeof data === 'string';
    };
    return StringType;
}());
export { StringType };
export default new StringType();
//# sourceMappingURL=string_type.js.map