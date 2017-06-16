import { Typed } from './typed'

export class StringType implements Typed {

  validate(data: any): data is string {
    return typeof data === 'string'
  }
}

export default new StringType()
