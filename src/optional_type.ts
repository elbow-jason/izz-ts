import { Typed } from './typed'

export class OptionalType implements Typed {
  typed: Typed

  constructor(typed: Typed) {
    this.typed = typed
  }

  validate(data: any): boolean {
    return this.typed.validate(data) || (data === undefined)
  }

}

const newOptionalType = (typed: Typed): OptionalType => {
  return new OptionalType(typed)
}

export default newOptionalType
