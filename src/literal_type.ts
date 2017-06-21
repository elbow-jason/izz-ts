
import { Typed, FieldContext } from './typed'

export type AllowedLiterals = ( number | boolean | string )

export class LiteralType extends Typed {
  readonly name: string
  readonly value: AllowedLiterals

  constructor(value: AllowedLiterals) {
    super()
    this.value = value
    this.name = 'literal:' + JSON.stringify(value)
  }

  isValid(data: any): boolean {
    return data === this.value
  }

}

const newLiteralType = (value: AllowedLiterals): LiteralType => {
  return new LiteralType(value)
}

export default newLiteralType
