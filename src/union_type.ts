
import { Typed, FieldContext, FieldError } from './typed'

export class UnionType extends Typed {
  name: string
  types: Typed[]

  constructor(types: Typed[]) {
    super()
    this.types = types
    this.name = this.generateName()
  }

  private generateName(): string {
    return '(' + this.types.map((typed: Typed) => typed.name).join('|') + ')'
  }

  isValid(data: any): boolean {
    return this.types.some((typed: Typed) => typed.isValid(data) )
  }

}

const newUnionType = (types: Typed[]): UnionType => {
  return new UnionType(types)
}

export default newUnionType
