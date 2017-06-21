import { Typed, FieldContext } from './typed'

export class AnyType extends Typed {
  readonly name: string = 'any'

  isValid(data: any): data is any {
    return true
  }

}

export default new AnyType()
