import { Typed } from './typed';
export declare class StringType extends Typed {
    readonly name: string;
    isValid(data: any): data is string;
}
declare const _default: StringType;
export default _default;
