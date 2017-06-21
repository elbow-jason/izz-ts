import { Typed, FieldContext } from './typed'

export class BooleanType extends Typed {
  readonly name: string = 'boolean'

  isValid(data: any): data is boolean {
    return typeof data === 'boolean'
  }

}

export default new BooleanType()
