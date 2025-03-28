function greet(greeting) {
  console.log(` ${greeting} ${this.name} age ${this.age}`);
}
const obj1 = { name: "krushna", age: 29 };
greet.call(obj1, "Hello from call");
greet.apply(obj1, ["Hello from apply"]);
const bindFunc = greet.bind(obj1, "Hello from bind");
bindFunc();
