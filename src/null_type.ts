import { Typed, FieldContext } from './typed'

export class NullType extends Typed {
  readonly name: string = 'null'

  isValid(data: any): data is null {
    return data === null
  }

}

export default new NullType()
