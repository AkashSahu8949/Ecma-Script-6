function* numberGen(){
    i=0;
    while(true){
        yield i++;

    }
}
var gen = numberGen();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)