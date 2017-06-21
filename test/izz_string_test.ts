
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

@suite class IzzStringTest {

  @test "izz.string.isValid returns true for empty strings" () {
    if (izz.string.isValid("") != true) failed("Failed on an empty string")
  }

  @test "izz.string.isValid returns true for normal strings" () {
    if (izz.string.isValid("a longer string") != true) failed("Failed on a normal string")
  }

  @test "izz.string.isValid returns false for non-strings" () {
    let data = [
      0.0, -1.23, 1.23, -1, 0, 1, true, false, null, {beef: false}, undefined, [{}], {},
    ]
    data.forEach((item: any) => {
      if (izz.string.isValid(item)) failed(`Failed on non-string (${JSON.stringify(item)})`)
    })
  }

}
