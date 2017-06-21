import { Typed } from './typed';
export declare class UnionType extends Typed {
    name: string;
    types: Typed[];
    constructor(types: Typed[]);
    private generateName();
    isValid(data: any): boolean;
}
declare const newUnionType: (types: Typed[]) => UnionType;
export default newUnionType;
