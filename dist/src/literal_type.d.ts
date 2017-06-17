import { Typed } from './typed';
export declare type AllowedLiterals = (number | boolean | string);
export declare class LiteralType implements Typed {
    value: AllowedLiterals;
    constructor(value: AllowedLiterals);
    validate(data: any): boolean;
}
declare const newLiteralType: (value: string | number | boolean) => LiteralType;
export default newLiteralType;
