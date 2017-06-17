
import { Typed } from './typed'

export type AllowedLiterals = ( number | boolean | string )

export class LiteralType implements Typed {
  value: AllowedLiterals
  constructor(value: AllowedLiterals) {
    this.value = value
  }

  validate(data: any): boolean {
    return data === this.value
  }

}

const newLiteralType = (value: AllowedLiterals): LiteralType => {
  return new LiteralType(value)
}

export default newLiteralType
