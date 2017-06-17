import { Typed } from './typed';
export declare class ArrayType<T> {
    typed: Typed;
    constructor(typed: Typed);
    validate(data: any): data is Array<T>;
    validateElements(data: Array<any>): boolean;
}
declare const newArrayType: (typed: Typed) => ArrayType<any>;
export default newArrayType;
