
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

@suite class IzzNumberTest {

  @test "izz.number.validate returns true for positive numbers" () {
    if (izz.number.validate(50) != true) failed("Failed on a positive numbers")
    if (izz.number.validate(1.1) != true) failed("Failed on a positive numbers")
    
  }

  @test "izz.number.validate returns true for negative numbers" () {
    if (izz.number.validate(-50) != true) failed("Failed on a negative numbers")
    if (izz.number.validate(-1.23) != true) failed("Failed on a negative numbers")
  }


  @test "izz.number.validate returns true for zero" () {
    if (izz.number.validate(0) != true) failed("Failed on 0")
    if (izz.number.validate(0.0) != true) failed("Failed on 0.0")
  }

  @test "izz.number.validate returns false for non-numbers" () {
    let data = [
      "beef", true, false, null, {beef: false}, undefined, [{}], {},
    ]
    data.forEach((item: any) => {
      if (izz.number.validate(item)) failed(`Failed on non-string (${JSON.stringify(item)})`)
    })
  }

}
