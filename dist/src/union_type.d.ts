import { Typed } from './typed';
export declare class UnionType implements Typed {
    types: Typed[];
    constructor(types: Typed[]);
    validate(data: any): boolean;
}
declare const newUnionType: (types: Typed[]) => UnionType;
export default newUnionType;
