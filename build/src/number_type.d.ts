import { Typed } from './typed';
export declare class NumberType implements Typed {
    validate(data: any): data is number;
}
declare const _default: NumberType;
export default _default;
