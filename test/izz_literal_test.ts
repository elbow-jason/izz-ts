
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

const literallyDog = izz.literal('dog')
const literally100 = izz.literal(100)
const literallyTrue = izz.literal(true)

@suite class IzzLiteralTest {

  @test "izz.literal.validate returns true for correct strings ('dog')" () {
    if (literallyDog.validate('dog') != true) failed("literally 'dog' failed on 'dog'")
  }

  @test "izz.boolean.validate (string) returns false for invalid others" () {
    let data = [
      "beef", "", -1, 0, 1, 2.0, 0.0, -1.3, null, {beef: false}, undefined, [{}], {},
    ]
    data.forEach((item: any) => {
      if (literallyDog.validate(item)) failed(`Failed on other value (${JSON.stringify(item)})`)
    })
  }

  @test "izz.literal.validate returns true for correct number (100)" () {
    if (literally100.validate(100) != true) failed("literally 100 failed on 100")
  }

  @test "izz.boolean.validate (number) returns false for invalid others" () {
    let data = [
      "beef", "", -1, 0, 2, 2.0, 0.0, -1.3, null, true, false, {beef: false}, undefined, [{}], {},
    ]
    data.forEach((item: any) => {
      if (literallyDog.validate(item)) failed(`Failed on other value (${JSON.stringify(item)})`)
    })
  }

  @test "izz.literal.validate returns true for correct boolean (true)" () {
    if (literallyTrue.validate(true) != true) failed("literally true failed on true")
  }

  @test "izz.boolean.validate (boolean) returns false for invalid others" () {
    let data = [
      "beef", "", -1, 0, 2, 2.0, 0.0, -1.3, null, false, {beef: false}, undefined, [{}], {},
    ]
    data.forEach((item: any) => {
      if (literallyDog.validate(item)) failed(`Failed on other value (${JSON.stringify(item)})`)
    })
  }


}
