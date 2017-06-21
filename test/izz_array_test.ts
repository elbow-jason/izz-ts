import { suite, test } from "mocha-typescript"

import * as izz from "../src"

declare const console: any

const failed = (reason: string): never => {
  throw new Error(reason)
}

const izzNumberArray = izz.array(izz.number)

@suite class IzzArrayTest {

  @test "izz.array.isValid returns true for valid arrays" () {
    if (izzNumberArray.isValid([1,2,3]) != true) failed("Failed on a valid number array")
  }

  @test "izz.array.isValid returns true for empty array" () {
    if (izzNumberArray.isValid([]) != true) failed("Failed on a empty array")
  }

  @test "izz.array.isValid returns false for non-arrays" () {
    let data = [
      -1, 1, 0, 10.12, -12.23, 0.0, "beef", true, false, null, undefined, {}, {ok: true}
    ]
    data.forEach((item: any) => {
      if (izzNumberArray.isValid(item)) failed(`Failed on non-array (${JSON.stringify(item)})`)
    })
  }

  @test "izz.array.isValid returns false for invalid arrays" () {
    let data = [
      ["invalid", "here"],
      [true, true, false],
      [null, {one: "two"}],
      [1, 2, 3, "invalid!!"],
    ]
    data.forEach((item: any) => {
      if (izzNumberArray.isValid(item)) failed(`Failed on invalid array (${JSON.stringify(item)})`)
    })
  }

  @test "izz.array.validate returns errors for invalid arrays" () {
    let data = [
      ["invalid", "here"],
      [true, true, false],
      [null, {one: "two"}],
      [1, 2, 3, "invalid!!"],
    ]
    data.forEach((item: any, index: number) => {
      let errors = izzNumberArray.validate('item' + index, item)
      if (errors.length === 0) {
        failed(`Failed on invalid array (${JSON.stringify(item, null, 2)}) with errors ${JSON.stringify(errors, null, 2)}`)
      }
    })
  }


  @test "izz.array.validate returns no errors for valid arrays" () {
    let good_array1 = [1, 2, 3]
    let errors1 = izzNumberArray.validate(`good_array1`, good_array1)
    if (errors1.length > 0) failed(`Failed on valid array. Expected: [] ... Got: ${JSON.stringify(errors1, null, 2)}`)
    let good_array2 = [1.0, 0.1, 100.1]
    let errors2 = izzNumberArray.validate(`good_array2`, good_array2)
    if (errors2.length > 0) failed(`Failed on valid array. Expected: [] ... Got: ${JSON.stringify(errors2, null, 2)}`)
  }

}
