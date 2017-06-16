
import { Typed } from './typed'

const getTyped = (obj: any, field: string): Typed => {
  let typed: Typed = obj[field]
  return typed
}

const getData = (data: any, field: string): any => {
  return data[field]
}

export class ObjectT implements Typed {
  fields: { [key: string]: Typed }
  constructor(fields: { [key: string]: Typed } = {}) {
    this.fields = fields
  }

  validate(data: any): data is object {
    return (typeof data === 'object' && !Array.isArray(data) && (data != null) && this.validateFields(data))
  }

  validateFields(data: any): boolean {
    for (let prop in this.fields) {
      if (this.fields.hasOwnProperty(prop)) {
        let value: any = getData(data, prop)
        let typed: Typed = getTyped(this.fields, prop)
        let validated = typed.validate(value)
        if (validated === false) {
          return false
        }
      }
    }
    return true
  }

}

const newObjectType = (fields: { [key: string]: Typed }): ObjectT => {
  return new ObjectT(fields)
}

export default newObjectType
