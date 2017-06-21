import { Typed } from './typed';
export declare class OptionalType extends Typed {
    readonly name: string;
    typed: Typed;
    constructor(typed: Typed);
    isValid(data: any): boolean;
}
declare const newOptionalType: (typed: Typed) => OptionalType;
export default newOptionalType;
