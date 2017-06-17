import { Typed } from './typed';
export default class DataValidator<T> {
    typed: Typed;
    constructor(typed: Typed);
    validate(data: any): data is T;
}
