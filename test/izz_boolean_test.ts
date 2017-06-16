
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

@suite class IzzBooleanTest {

  @test "izz.boolean.validate returns true for true" () {
    if (izz.boolean.validate(true) != true) failed("boolean failed on true")
  }

  @test "izz.boolean.validate returns true for false" () {
    if (izz.boolean.validate(false) != true) failed("boolean failed on false")
  }

  @test "izz.boolean.validate returns false for non-booleans" () {
    let data = [
      "beef", "", -1, 0, 1, 2.0, 0.0, -1.3, null, {beef: false}, undefined, [{}], {},
    ]
    data.forEach((item: any) => {
      if (izz.boolean.validate(item)) failed(`Failed on non-boolean (${JSON.stringify(item)})`)
    })
  }

}
