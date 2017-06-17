import { Typed } from './typed';
export declare class ObjectT implements Typed {
    fields: {
        [key: string]: Typed;
    };
    constructor(fields?: {
        [key: string]: Typed;
    });
    validate(data: any): data is object;
    validateFields(data: any): boolean;
}
declare const newObjectType: (fields: {
    [key: string]: Typed;
}) => ObjectT;
export default newObjectType;
