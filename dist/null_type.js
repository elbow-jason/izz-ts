var NullType = (function () {
    function NullType() {
    }
    NullType.prototype.validate = function (data) {
        return data === null;
    };
    return NullType;
}());
export { NullType };
var nullType = new NullType();
export default nullType;
//# sourceMappingURL=null_type.js.map