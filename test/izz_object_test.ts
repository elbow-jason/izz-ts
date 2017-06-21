
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

  @test "izz.object.isValid returns true for valid objects (classes)" () {
    const personInstance = new Person("Rick", 18)
    if (izzPerson.isValid(personInstance) != true) failed("Failed on a valid class object")
  }

  @test "izz.object.isValid returns true for valid objects (plain-old objects)" () {
    const goodPerson = {
      name: "Rick",
      age: 18,
    }
    if (izzPerson.isValid(goodPerson) != true) failed("Failed on a valid plain-old object")
  }

  @test "izz.object.isValid returns true for valid empty" () {
    if (izzEmptyObject.isValid({}) != true) failed("Failed on a valid empty object")
  }

  @test "izz.object.isValid returns false for non-objects" () {
    let data = [
      -1, 1, 0, 10.12, -12.23, 0.0, "beef", true, false, null, undefined, [], [1, 2, 3, 4]
    ]
    data.forEach((item: any) => {
      if (izzPerson.isValid(item)) failed(`Failed on non-object (${JSON.stringify(item)})`)
    })
  }


  @test "izz.object.isValid returns false for invalid objects" () {
    let data = [
      {}, {name: "beef", age: "beef"}, {name: 1}, {other: true}, new NotPerson("Harold")
    ]
    data.forEach((item: any) => {
      if (izzPerson.isValid(item)) failed(`Failed to return false on invalid object (${JSON.stringify(item)})`)
    })
  }

  @test "izz.object.validate returns empty error array for valid objects" () {
    let person = new Person('Jane', 34)
    let result = izzPerson.validate('person1', person)
    if (result.length > 0) {
      failed('result should have no errors upon validation. Got: ' + JSON.stringify(result))
    }
  }


  @test "izz.object.validate returns errors for invalid objects" () {
    let not_person = {
      beef: true
    }
    let result = izzPerson.validate('not_person', not_person)
    if (result.length !== 2) {
      failed('not_person should have 2 errors upon validation. Got: ' + JSON.stringify(result))
    }
  }

}