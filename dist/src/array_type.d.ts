import { Typed, FieldContext, FieldError } from './typed';
export declare class ArrayType<T> implements Typed {
    readonly typed: Typed;
    readonly name: string;
    constructor(typed: Typed);
    isValid(data: any): data is Array<T>;
    private isValidElements(data);
    context(field: string, data: any): FieldContext[];
    private contextElement(field, data);
    validate(field: string, data: any): FieldError[];
}
declare const newArrayType: (typed: Typed) => ArrayType<any>;
export default newArrayType;
