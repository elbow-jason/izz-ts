var UnionType = (function () {
    function UnionType(types) {
        this.types = types;
    }
    UnionType.prototype.validate = function (data) {
        return this.types.some(function (typed) { return typed.validate(data); });
    };
    return UnionType;
}());
export { UnionType };
var newUnionType = function (types) {
    return new UnionType(types);
};
export default newUnionType;
//# sourceMappingURL=union_type.js.map