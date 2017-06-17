import { Typed } from './typed';
export declare class AnyType implements Typed {
    validate(data: any): data is any;
}
declare const anyType: AnyType;
export default anyType;
