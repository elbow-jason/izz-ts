
import { suite, test } from "mocha-typescript"

import * as izz from "../src"

const failed = (reason: string): never => {
  throw new Error(reason)
}

class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

}

class NotPerson {
  name: string
  legs: number = 4
  constructor(name: string) {
    this.name = name
  }
}

const izzPerson = izz.object({name: izz.string, age: izz.number})
const izzEmptyObject = izz.object({})

@suite class IzzObjectTest {

  @test "izz.object.validate returns true for valid objects (classes)" () {
    const personInstance = new Person("Rick", 18)
    if (izzPerson.validate(personInstance) != true) failed("Failed on a valid class object")
  }

  @test "izz.object.validate returns true for valid objects (plain-old objects)" () {
    const goodPerson = {
      name: "Rick",
      age: 18,
    }
    if (izzPerson.validate(goodPerson) != true) failed("Failed on a valid plain-old object")
  }

  @test "izz.object.validate returns true for valid empty" () {
    if (izzEmptyObject.validate({}) != true) failed("Failed on a valid empty object")
  }

  @test "izz.number.validate returns false for non-objects" () {
    let data = [
      -1, 1, 0, 10.12, -12.23, 0.0, "beef", true, false, null, undefined, [], [1, 2, 3, 4]
    ]
    data.forEach((item: any) => {
      if (izzPerson.validate(item)) failed(`Failed on non-object (${JSON.stringify(item)})`)
    })
  }


  @test "izz.number.validate returns false for invalid objects" () {
    let data = [
      {}, {name: "beef", age: "beef"}, {name: 1}, {other: true}, new NotPerson("Harold")
    ]
    data.forEach((item: any) => {
      if (izzPerson.validate(item)) failed(`Failed to return false on invalid object (${JSON.stringify(item)})`)
    })
  }

}