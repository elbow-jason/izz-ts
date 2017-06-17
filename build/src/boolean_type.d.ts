import { Typed } from './typed';
export declare class BooleanType implements Typed {
    validate(data: any): data is boolean;
}
declare const booleanType: BooleanType;
export default booleanType;
