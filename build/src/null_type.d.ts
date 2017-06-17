import { Typed } from './typed';
export declare class NullType implements Typed {
    validate(data: any): data is null;
}
declare const nullType: NullType;
export default nullType;
