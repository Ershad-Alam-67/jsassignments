class Human {
  constructor() {
    this.gender = "male"
  }
  printgender() {
    console.log(this.gender)
  }
}
class Person extends Human {
  constructor() {
    super()
    this.name = "Max"
    this.age = 35
  }
  printMyName() {
    console.log(this.name)
  }
  printAge() {
    console.log(this.age)
  }
}
const person = new Person()
person.printMyName()
person.printgender()
person.printAge()
