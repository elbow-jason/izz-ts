import { Typed, FieldError } from './typed';
export declare class DataValidator {
    typed: Typed;
    errors: FieldError[];
    name: string;
    data: any;
    constructor(name: string, typed: Typed, data: any);
    isValid(): boolean;
}
