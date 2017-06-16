import { Typed } from './typed'

export class NumberType implements Typed {

  validate(data: any): data is number {
    return typeof data === 'number'
  }

}

export default new NumberType()
