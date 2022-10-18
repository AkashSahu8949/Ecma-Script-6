// add padstart(countnumber,"addstringvalue") its add in stating of string
console.log(result);
const newmethod = "4";
method = newmethod.padStart(5,"rahul")
console.log(method)
// add padstart(countnumber,"addstringvalue") its add in end of string
method1 = newmethod.padEnd(46,"4e")
console.log(method1)


//You are familiar with Object.keys(). This is exactly opposite of Object.keys().
newboj ={
    a:10,
    b:20
}
var sum = Object.values(newboj).reduce((a,b)=>a+b)
console.log(sum)
newboj1 =[{
    a:"10",
    b:"20"
}]
for(let value of newboj1){
    console.log(value) 
 }