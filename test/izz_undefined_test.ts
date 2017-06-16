
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

@suite class IzzUndefinedTest {

  @test "izz.undefined.validate returns true for true" () {
    if (izz.undefined.validate(undefined) != true) failed("Failed on undefined")
  }

  @test "izz.undefined.validate returns false for non-undefineds" () {
    let data = [
      "beef", "", -1, 0, 1, 1.0, -1.0, 0.0, {beef: false}, null, [{}], {},
    ]
    data.forEach((item: any) => {
      if (izz.undefined.validate(item)) failed(`Failed on non-undefined (${JSON.stringify(item)})`)
    })
  }

}
