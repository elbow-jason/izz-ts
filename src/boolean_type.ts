import { Typed } from './typed'

export class BooleanType implements Typed {

  validate(data: any): data is boolean {
    return typeof data === 'boolean'
  }

}

const booleanType = new BooleanType()
export default booleanType
