
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

const numStr = izz.union([izz.number, izz.string])

@suite class IzzUnionTest {

  @test "izz.union.isValid returns true for any valid Typed union" () {
    if (numStr.isValid(1) !== true) failed("numStr union should allow numbers")
    if (numStr.isValid('dog') !== true) failed("numStr union should allow strings")
  }

  @test "izz.union.isValid returns false for any invalid type" () {
    if (numStr.isValid(true) !== false) failed("numStr union should not allow true")
    if (numStr.isValid(false) !== false) failed("numStr union should not allow false")
    if (numStr.isValid(null) !== false) failed("numStr union should not allow null")
    if (numStr.isValid(undefined) !== false) failed("numStr union should not allow undefined")
    if (numStr.isValid({"beef": "dog"}) !== false) failed("numStr union should not allow objects")
  }

  @test "izz.union.validate returns no errors for valid data" () {
    let errors = numStr.validate('bad_data', true)
    if (errors.length != 1) failed("numStr.validate union should return an error on true. Got: " + JSON.stringify(errors, null, 2))
  }


}