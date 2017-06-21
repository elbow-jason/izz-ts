import { Typed, FieldContext, FieldError } from './typed';
export declare class ObjectType extends Typed {
    readonly name: 'object';
    readonly fields: {
        [key: string]: Typed;
    };
    constructor(fields?: {
        [key: string]: Typed;
    });
    isValid(data: any): data is object;
    private isObjecty(data);
    private validateFields(data);
    context(parent_field: string, data: any): FieldContext[];
    validate(parent_field: string, data: any): FieldError[];
}
declare const newObjectType: (fields: {
    [key: string]: Typed;
}) => ObjectType;
export default newObjectType;
