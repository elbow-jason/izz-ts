
import { Typed, FieldContext, FieldError, fieldErrors } from './typed'

const getTyped = (obj: any, field: string): Typed => {
  let typed: Typed = obj[field]
  return typed
}

const getData = (data: any, field: string): any => {
  return data[field]
}

export class ObjectType extends Typed {
  readonly name: 'object'
  readonly fields: { [key: string]: Typed }
  constructor(fields: { [key: string]: Typed } = {}) {
    super()
    this.fields = fields
  }

  isValid(data: any): data is object {
    return (this.isObjecty(data) && this.validateFields(data))
  }

  private isObjecty(data: any): boolean {
    return (typeof data === 'object' && !Array.isArray(data) && (data != null))
  }

  private validateFields(data: any): boolean {
    for (let field in this.fields) {
      if (this.fields.hasOwnProperty(field)) {
        let value: any = getData(data, field)
        let typed: Typed = getTyped(this.fields, field)
        let validated = typed.isValid(value)
        if (validated === false) {
          return false
        }
      }
    }
    return true
  }

  context(parent_field: string, data: any): FieldContext[] {
    if (this.isObjecty(data)) {
      let contexts: FieldContext[] = []
      for (let field in this.fields) {
        if (this.fields.hasOwnProperty(field)) {
          let value: any = getData(data, field)
          let typed: Typed = getTyped(this.fields, field)
          let ctx = new FieldContext(`${parent_field}.${field}`, typed, value)
          if (ctx.error()) contexts.push(ctx)
        }
      }
      return contexts
    } else {
      return [new FieldContext(parent_field, this, data)]
    }
  }

  validate(parent_field: string, data: any): FieldError[] {
    return fieldErrors(this.context(parent_field, data))
  }

}

const newObjectType = (fields: { [key: string]: Typed }): ObjectType => {
  return new ObjectType(fields)
}

export default newObjectType