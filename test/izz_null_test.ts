
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

@suite class IzzNullTest {

  @test "izz.null.validate returns true for null" () {
    if (izz.null.validate(null) != true) failed("Failed on null")
  }

  @test "izz.null.validate returns false for non-nulls" () {
    let data = [
      "beef", "", -1, 0, 1, 1.0, -1.0, 0.0, false, true, undefined, {beef: false}, [{}], {},
    ]
    data.forEach((item: any) => {
      if (izz.null.validate(item)) failed(`Failed on non-null (${JSON.stringify(item)})`)
    })
  }

}
