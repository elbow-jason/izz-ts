var BooleanType = (function () {
    function BooleanType() {
    }
    BooleanType.prototype.validate = function (data) {
        return typeof data === 'boolean';
    };
    return BooleanType;
}());
export { BooleanType };
var booleanType = new BooleanType();
export default booleanType;
//# sourceMappingURL=boolean_type.js.map