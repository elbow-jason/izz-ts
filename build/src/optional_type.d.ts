import { Typed } from './typed';
export declare class OptionalType implements Typed {
    typed: Typed;
    constructor(typed: Typed);
    validate(data: any): boolean;
}
declare const newOptionalType: (typed: Typed) => OptionalType;
export default newOptionalType;
