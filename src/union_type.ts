
import { Typed } from './typed'

export class UnionType implements Typed {
  types: Typed[]

  constructor(types: Typed[]) {
    this.types = types
  }

  validate(data: any): boolean {
    return this.types.some((typed: Typed) => typed.validate(data) )
  }

}

const newUnionType = (types: Typed[]): UnionType => {
  return new UnionType(types)
}

export default newUnionType
