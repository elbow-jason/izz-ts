import { Typed } from './typed';
export declare class NumberType extends Typed {
    readonly name: string;
    isValid(data: any): data is number;
}
declare const _default: NumberType;
export default _default;
