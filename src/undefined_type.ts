
import { Typed, TypedI, FieldContext, fieldErrors, FieldError } from './typed'

export class UndefinedType extends Typed {
  readonly name: string = 'undefined'

  isValid(data: any): boolean {
    return data === undefined
  }


}

export default new UndefinedType()
