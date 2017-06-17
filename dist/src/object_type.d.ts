import { Typed } from './typed';
export declare class ObjectType implements Typed {
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
}) => ObjectType;
export default newObjectType;
