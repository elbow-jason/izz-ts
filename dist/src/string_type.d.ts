import { Typed } from './typed';
export declare class StringType implements Typed {
    validate(data: any): data is string;
}
declare const _default: StringType;
export default _default;
