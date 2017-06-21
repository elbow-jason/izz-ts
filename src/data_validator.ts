
import { Typed, FieldError } from './typed'

export class DataValidator {
  typed: Typed
  errors: FieldError[] = []
  name: string
  data: any

  constructor(name: string, typed: Typed, data: any) {
    this.name = name
    this.typed = typed
    this.data = data
    this.errors = this.typed.validate(this.name, this.data)
  }

  isValid(): boolean {
    return (this.errors.length === 0)
  }

}
