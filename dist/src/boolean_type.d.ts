import { Typed } from './typed';
export declare class BooleanType extends Typed {
    readonly name: string;
    isValid(data: any): data is boolean;
}
declare const _default: BooleanType;
export default _default;
