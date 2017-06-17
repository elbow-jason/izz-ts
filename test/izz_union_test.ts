
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

const numStr = izz.union([izz.number, izz.string])

@suite class IzzUnionTest {

  @test "izz.union.validate returns true for any valid Typed union" () {
    if (numStr.validate(1) !== true) failed("numStr union should allow numbers")
    if (numStr.validate('dog') !== true) failed("numStr union should allow strings")
  }

  @test "izz.union.validate returns false for any invalid type" () {
    if (numStr.validate(true) !== false) failed("numStr union should not allow true")
    if (numStr.validate(false) !== false) failed("numStr union should not allow false")
    if (numStr.validate(null) !== false) failed("numStr union should not allow null")
    if (numStr.validate(undefined) !== false) failed("numStr union should not allow undefined")
    if (numStr.validate({"beef": "dog"}) !== false) failed("numStr union should not allow objects")
  }
  


}