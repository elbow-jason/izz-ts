var ArrayType = (function () {
    function ArrayType(typed) {
        this.typed = typed;
    }
    ArrayType.prototype.validate = function (data) {
        return Array.isArray(data) && this.validateElements(data);
    };
    ArrayType.prototype.validateElements = function (data) {
        var _this = this;
        return data.every(function (item) {
            return _this.typed.validate(item);
        });
    };
    return ArrayType;
}());
export { ArrayType };
var newArrayType = function (typed) {
    return new ArrayType(typed);
};
export default newArrayType;
//# sourceMappingURL=array_type.js.map