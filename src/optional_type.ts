import { Typed, FieldContext } from './typed'

export class OptionalType extends Typed {
  readonly name: string
  typed: Typed

  constructor(typed: Typed) {
    super()
    this.typed = typed
    this.name = 'optional:' + typed.name
  }

  isValid(data: any): boolean {
    return this.typed.isValid(data) || (data === undefined)
  }

}

const newOptionalType = (typed: Typed): OptionalType => {
  return new OptionalType(typed)
}

export default newOptionalType
