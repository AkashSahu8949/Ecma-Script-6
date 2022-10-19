const entries = new Map([
  ['Akash', 'Sahu'],
  ['age', 22]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
