/**
 * @class
 */

class Person {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.height = data.height;
    Person.personCounter++;
  }
  static personCounter = 0;

  info() {
    console.log(
      `${this.name} is ${this.age} years old, and measures ${this.height}`
    );
  }

  modifyName(newName) {
    this.name = newName;
    console.log(this.name);
  }
}

let santiago = new Person({ name: "Santiago", age: 20, height: 184 });
let federico = new Person({ name: "Federico", age: 22, height: 172 });

santiago.info();
santiago.modifyName("Daniel");

console.log(Person.personCounter);
