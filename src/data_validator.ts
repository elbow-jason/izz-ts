
import { Typed, FieldError } from './typed'

export class DataValidator {
  typed: Typed
  errors: FieldError[] = []
  named: string
  data: any

  constructor(named: string, typed: Typed, data: any) {
    this.named = named
    this.typed = typed
    this.data = data
    this.errors = this.typed.validate(this.named, this.data)
  }

  isValid(): boolean {
    return (this.errors.length === 0)
  }

}
