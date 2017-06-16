import { Typed } from './typed'

export class NullType implements Typed {

  validate(data: any): data is null {
    return data === null
  }

}

const nullType = new NullType()

export default nullType
