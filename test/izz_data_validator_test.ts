
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

const animalDataValidator = (name: string, data: any): izz.DataValidator => {
  return new izz.DataValidator(name, izzAnimal, data)
}

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
    const maybeAnimalValidator = animalDataValidator('maybeAnimal', maybeAnimal)
    const isAnimal: boolean = maybeAnimalValidator.isValid()
    if (isAnimal != true) {
      failed("Validator did not validate correctly")
    }
    let nonAnimal = {
      shimmy: true
    }
    const nonAnimalValidator = animalDataValidator('nonAnimal', nonAnimal)
    const notAnimal = nonAnimalValidator.isValid()
    if (notAnimal != false) {
      failed("Validator did not invalidate correctly")
    }
  }

}