
import { Typed } from './typed'

export class DataValidator<T> {
  typed: Typed
  constructor(typed: Typed) {
    this.typed = typed
  }

  validate(data: any): data is T {
    return this.typed.validate(data)
  }
}
