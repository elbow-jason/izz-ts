
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

@suite class IzzStringTest {

  @test "izz.string.validate returns true for empty strings" () {
    if (izz.string.validate("") != true) failed("Failed on an empty string")
  }

  @test "izz.string.validate returns true for normal strings" () {
    if (izz.string.validate("a longer string") != true) failed("Failed on a normal string")
  }

  @test "izz.string.validate returns false for non-strings" () {
    let data = [
      0, 1, true, false, null, {beef: false}, undefined, [{}], {},
    ]
    if (data.some(izz.string.validate)) failed("Failed on non-string")
  }




}