import { Typed } from './typed';
export declare type AllowedLiterals = (number | boolean | string);
export declare class LiteralType extends Typed {
    readonly name: string;
    readonly value: AllowedLiterals;
    constructor(value: AllowedLiterals);
    isValid(data: any): boolean;
}
declare const newLiteralType: (value: string | number | boolean) => LiteralType;
export default newLiteralType;
