import { Typed, FieldContext, FieldError, fieldErrors } from './typed'

export class ArrayType<T> implements Typed {
  readonly typed: Typed
  readonly name: string = 'array'

  constructor(typed: Typed) {
    this.typed = typed
  }

  isValid(data: any): data is Array<T> {
    return Array.isArray(data) && this.isValidElements(data)
  }

  private isValidElements(data: Array<any>): boolean {
    return data.every((item: any): boolean => {
      return this.typed.isValid(item)
    })
  }

  context(field: string, data: any): FieldContext[] {
    if (Array.isArray(data)) {
      return data.map((item: any, index: number) => {
        return this.contextElement(`${field}[${index}]`, item)
      })
    } else {
      return [this.contextElement(field, data)]
    }
  }

  private contextElement(field: string, data: any): FieldContext { 
    return new FieldContext(field, this.typed, data)
  }

  validate(field: string, data: any): FieldError[] {
    return fieldErrors(this.context(field, data))
  }

}

const newArrayType = (typed: Typed): ArrayType<any> => {
  return new ArrayType(typed)
}

export default newArrayType
