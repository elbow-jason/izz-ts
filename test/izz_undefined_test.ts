
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

@suite class IzzUndefinedTest {

  @test "izz.undefined.isValid returns true for undefined" () {
    if (izz.undefined.isValid(undefined) != true) failed("Failed on undefined")
  }

  @test "izz.undefined.isValid returns false for non-undefineds" () {
    let data = [
      "beef", "", -1, 0, 1, 1.0, -1.0, 0.0, {beef: false}, null, [{}], {},
    ]
    data.forEach((item: any) => {
      if (izz.undefined.isValid(item)) failed(`Failed on non-undefined (${JSON.stringify(item)})`)
    })
  }

}
