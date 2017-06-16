
import { Typed } from './typed'

export class UndefinedType implements Typed {

  validate(data: any): boolean {
    return data === undefined
  }
}

export default new UndefinedType()
