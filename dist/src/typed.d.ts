export declare class FieldError {
    field: string;
    expected: string;
    got: any;
    constructor(field: string, expected: string, got: any);
}
export declare class FieldContext {
    readonly field: string;
    readonly typed: Typed;
    readonly data: any;
    constructor(field: string, typed: Typed, data: any);
    isValid(): boolean;
    error(): (FieldError | null);
    asError(): FieldError;
}
export declare class ValidationContext {
    contexts: FieldContext[];
    addFieldContext(field_context: FieldContext): void;
    errors(): FieldError[];
    hasErrors(): boolean;
    run(name: string, data: any, typed: Typed): void;
}
export declare const fieldErrors: (contexts: FieldContext[]) => FieldError[];
export interface TypedI {
    readonly name: string;
    validate: (field: string, data: any) => FieldError[];
    context: (field: string, data: any) => FieldContext[];
    isValid: (data: any) => boolean;
}
export declare class Typed implements TypedI {
    readonly name: string;
    context(field: string, data: any): FieldContext[];
    validate(field: string, data: any): FieldError[];
    isValid(data: any): boolean;
}
