
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

@suite class IzzBooleanTest {

  @test "izz.boolean.isValid returns true for true" () {
    if (izz.boolean.isValid(true) != true) failed("boolean failed on true")
  }

  @test "izz.boolean.isValid returns true for false" () {
    if (izz.boolean.isValid(false) != true) failed("boolean failed on false")
  }

  @test "izz.boolean.isValid returns false for non-booleans" () {
    let data = [
      "beef", "", -1, 0, 1, 2.0, 0.0, -1.3, null, {beef: false}, undefined, [{}], {},
    ]
    data.forEach((item: any) => {
      if (izz.boolean.isValid(item)) failed(`Failed on non-boolean (${JSON.stringify(item)})`)
    })
  }

  @test "izz.boolean.validate returns no error (null) for false" () {
    let errors = izz.boolean.validate('ctx', false)
    if (errors.length > 0) {
      failed('izz.boolean.validate for false should have been null. got: ' + JSON.stringify(errors, null, 2))
    }
  }

  @test "izz.boolean.validate returns no error (null) for true" () {
    let errors = izz.boolean.validate('ctx', true)
    if (errors.length > 0) {
      failed('izz.boolean.validate for true should have been null. got: ' + JSON.stringify(errors, null, 2))
    }
    
  }

  @test "izz.boolean.validate returns an error for non-boolean data" () {
    let errors = izz.boolean.validate('ctx', 'fleep')
    if (errors.length !== 1) failed('izz.boolean.validate for \'fleep\' should not have produced an error. got: ' + JSON.stringify(errors, null, 2))
  }


}
