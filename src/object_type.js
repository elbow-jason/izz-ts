"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTyped = (obj, field) => {
    let typed = obj[field];
    return typed;
};
const getData = (data, field) => {
    return data[field];
};
class ObjectT {
    constructor(fields = {}) {
        this.fields = fields;
    }
    validate(data) {
        return (typeof data === 'object' && !Array.isArray(data) && (data != null) && this.validateFields(data));
    }
    validateFields(data) {
        for (let prop in this.fields) {
            if (this.fields.hasOwnProperty(prop)) {
                let value = getData(data, prop);
                let typed = getTyped(this.fields, prop);
                let validated = typed.validate(value);
                if (validated === false) {
                    return false;
                }
            }
        }
        return true;
    }
}
exports.ObjectT = ObjectT;
const newObjectType = (fields) => {
    return new ObjectT(fields);
};
exports.default = newObjectType;
