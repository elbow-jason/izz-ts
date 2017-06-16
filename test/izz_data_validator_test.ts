
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

const izzAnimal = izz.object({
  isHairy: izz.boolean,
  legs: izz.number,
  eats: izz.array(izz.string)
})

class Animal {
  isHairy: boolean = true
  legs: number = 4
  eats: Array<string>

  hasLegs(): boolean {
    return this.legs > 0
  }
}

const animalValidator = new izz.DataValidator<Animal>(izzAnimal)

const animalHasLegs = (animal: Animal): boolean => {
  return animal.hasLegs()
}

@suite class IzzDataValidatorTest {

  @test "izz DataValidator works" () {
    const maybeAnimal: any = {
      "isHairy": true,
      "legs": 2,
      "eats": ["meat", "veggies"]
    }
    const isAnimal: boolean = animalValidator.validate(maybeAnimal)
    if (isAnimal != true) {
      failed("Validator did not validate correctly")
    }
    let nonAnimal = {
      shimmy: true
    }
    const notAnimal = animalValidator.validate(nonAnimal)
    if (notAnimal != false) {
      failed("Validator did not invalidate correctly")
    }
  }

}