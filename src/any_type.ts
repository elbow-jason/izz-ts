import { Typed } from './typed'

export class AnyType implements Typed {
  validate(data: any): data is any {
    return true
  }
}

const anyType = new AnyType()

export default anyType
