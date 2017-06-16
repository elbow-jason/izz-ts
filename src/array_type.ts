import { Typed } from './typed'

export class ArrayType<T> {
  typed: Typed

  constructor(typed: Typed) {
    this.typed = typed
  }

  validate(data: any): data is Array<T> {
    return Array.isArray(data) && this.validateElements(data)
  }

  validateElements(data: Array<any>): boolean {
    return data.every((item: any): boolean => {
      return this.typed.validate(item)
    })
  }

}

const newArrayType = (typed: Typed): ArrayType<any> => {
  return new ArrayType(typed)
}

export default newArrayType
