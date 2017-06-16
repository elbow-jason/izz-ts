var AnyType = (function () {
    function AnyType() {
    }
    AnyType.prototype.validate = function (data) {
        return true;
    };
    return AnyType;
}());
export { AnyType };
var anyType = new AnyType();
export default anyType;
//# sourceMappingURL=any_type.js.map