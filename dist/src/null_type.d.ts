import { Typed } from './typed';
export declare class NullType extends Typed {
    readonly name: string;
    isValid(data: any): data is null;
}
declare const _default: NullType;
export default _default;
