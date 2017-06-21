import { Typed, FieldContext } from './typed'

export class NumberType extends Typed {
  readonly name: string = 'number'

  isValid(data: any): data is number {
    return typeof data === 'number'
  }

}

export default new NumberType()
