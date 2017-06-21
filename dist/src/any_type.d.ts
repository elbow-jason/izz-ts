import { Typed } from './typed';
export declare class AnyType extends Typed {
    readonly name: string;
    isValid(data: any): data is any;
}
declare const _default: AnyType;
export default _default;
