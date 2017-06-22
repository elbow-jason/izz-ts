
export class FieldError {
  field: string
  expected: string
  got: any

  constructor(field: string, expected: string, got: any) {
    this.field = field
    this.expected = expected
    this.got = got
  }
}

export class FieldContext {
  readonly field: string
  readonly typed: Typed
  readonly data:  any
  

  constructor(field: string, typed: Typed, data: any) {
    this.field = field
    this.typed = typed
    this.data  = data
  }

  isValid(): boolean {
    return this.typed.isValid(this.data)
  }

  error(): ( FieldError | null ) {
    if (this.isValid()) return null
    return this.asError()
  }

  asError(): FieldError {
    return new FieldError(this.field, this.typed.name, this.data)
  }


}

export class ValidationContext {
  contexts:  FieldContext[] = []

  addFieldContext(field_context: FieldContext) {
    this.contexts.push(field_context)
  }

  errors(): FieldError[] {
    return this.contexts
      .filter((fc: FieldContext) => !fc.isValid())
      .map((fc: FieldContext) => fc.asError())
  }

  hasErrors(): boolean {
    return (this.errors().length > 0)
  }

  run(name: string, data: any, typed: Typed){
    if (typed.validate(name, data)) {}
  }
}


export const fieldErrors = (contexts: FieldContext[]): FieldError[] => {
  let errors: FieldError[] = []
  contexts.forEach((fc: FieldContext) => {
    let maybeError = fc.error()
    if (maybeError instanceof FieldError) {
      errors.push(maybeError)
    }
  })
  return errors
}


export interface TypedI {
  readonly name: string
  validate: (field: string, data: any) => FieldError[]
  context:  (field: string, data: any) => FieldContext[]
  isValid:  (data: any) => boolean
}


export class Typed implements TypedI {
  readonly name: string

  context(field: string, data: any): FieldContext[] { 
    return [new FieldContext(field, this, data)]
  }

  validate(field: string, data: any): FieldError[] {
    return fieldErrors(this.context(field, data))
  }

  isValid(data: any): boolean {
    return false
  }
}