
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

  @test "izz.string.validate returns false for non-numbers" () {
    let data = [
      0.0, -1.23, 1.23, -1, 0, 1, true, false, null, {beef: false}, undefined, [{}], {},
    ]
    data.forEach((item: any) => {
      if (izz.string.validate(item)) failed(`Failed on non-string (${JSON.stringify(item)})`)
    })
  }

}
