import { Typed, FieldError } from './typed';
export declare class DataValidator {
    typed: Typed;
    errors: FieldError[];
    named: string;
    data: any;
    constructor(named: string, typed: Typed, data: any);
    isValid(): boolean;
}
