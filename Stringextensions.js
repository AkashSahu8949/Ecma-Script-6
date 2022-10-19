//he startsWith() returns true if a string start with the characters of a specified string or false otherwise.
const title = 'Jack and Jill Went Up the Hill';

console.log(title.startsWith('Jack'));
console.log(title.startsWith('jack'));
console.log(title.startsWith('Jill', 9));

//he endsWith() returns true if a string ends with the characters of a specified string or false otherwise.
const title1 = 'Jack and Jill Went Up the Hill';

console.log(title1.endsWith('Hill'));
console.log(title1.endsWith('Hill'));
console.log(title1.endsWith('Jill', 9));

//you will learn how to use the JavaScript String includes() method to check if a string contains another string.
let email = 'admin@example.com';
console.log(email.includes('@'));