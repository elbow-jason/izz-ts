import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

const izzNumberArray = izz.array(izz.number)

@suite class IzzArrayTest {

  @test "izz.array.validate returns true for valid arrays" () {
    if (izzNumberArray.validate([1,2,3]) != true) failed("Failed on a valid number array")
  }

  @test "izz.array.validate returns true for empty array" () {
    if (izzNumberArray.validate([]) != true) failed("Failed on a empty array")
  }

  @test "izz.array.validate returns false for non-arrays" () {
    let data = [
      -1, 1, 0, 10.12, -12.23, 0.0, "beef", true, false, null, undefined, {}, {ok: true}
    ]
    data.forEach((item: any) => {
      if (izzNumberArray.validate(item)) failed(`Failed on non-array (${JSON.stringify(item)})`)
    })
  }

  @test "izz.array.validate returns false for invalid arrays" () {
    let data = [
      ["invalid", "here"],
      [true, true, false],
      [null, {one: "two"}],
      [1, 2, 3, "invalid!!"],
    ]
    data.forEach((item: any) => {
      if (izzNumberArray.validate(item)) failed(`Failed on invalid array (${JSON.stringify(item)})`)
    })
  }

}


