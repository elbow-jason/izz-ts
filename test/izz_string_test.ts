
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

@suite class IzzStringTest {
  @test "izz.string.validate returns true for strings" () {
    const result1 = izz.string.validate("")
    if (result1 != true) throw new Error("Failed on an empty string")
    const result2 = izz.string.validate("a longer string")
    if (result2 != true) throw new Error("Failed on an string")
  }
}