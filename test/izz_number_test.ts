
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

@suite class IzzNumberTest {

  @test "izz.number.isValid returns true for positive numbers" () {
    if (izz.number.isValid(50) != true) failed("Failed on a positive numbers")
    if (izz.number.isValid(1.1) != true) failed("Failed on a positive numbers")
    
  }

  @test "izz.number.isValid returns true for negative numbers" () {
    if (izz.number.isValid(-50) != true) failed("Failed on a negative numbers")
    if (izz.number.isValid(-1.23) != true) failed("Failed on a negative numbers")
  }


  @test "izz.number.isValid returns true for zero" () {
    if (izz.number.isValid(0) != true) failed("Failed on 0")
    if (izz.number.isValid(0.0) != true) failed("Failed on 0.0")
  }

  @test "izz.number.isValid returns false for non-numbers" () {
    let data = [
      "beef", true, false, null, {beef: false}, undefined, [{}], {}, [1, 2, 3]
    ]
    data.forEach((item: any) => {
      if (izz.number.isValid(item)) failed(`Failed on non-string (${JSON.stringify(item)})`)
    })
  }

  @test "izz.number.validate returns an empty array for numbers" () {
    let errors = izz.number.validate('zero', 0)
    if (errors.length > 0) failed("Failed on 0")
  }


}
