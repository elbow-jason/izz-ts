import { Typed, FieldContext } from './typed'

export class StringType extends Typed {
  readonly name: string = 'string'

  isValid(data: any): data is string {
    return typeof data === 'string'
  }

}

export default new StringType()
