let sentences = [
    "JavaScript Array flatMap()", 
    " ", 
    "is", 
    " ", 
    "Awesome"
];

let words = sentences.flatMap(s => s.split(' '));
console.log(words);