const obj ={
    name:'akash',
    location:'jaipur',
    hometown:'rajgarh'
}
// this for in loop is using to find char in obj 

for(let char in obj){
    console.log(obj[char])
}
const str = "hello how are you ";
// this for in loop is using to iertion in string 

for(let char in str){
    console.log(str[char])
}
const arr1 = ['rahul','kumar','jaipur'];
for(let name of arr1){
    console.log(name)
}
const arr = [{1:1, 2:2},{3:3},{1:1,4:4},{1:1,2:2}];

// find value of arr using for of loop in this condtions 
for(let value of arr){
   console.log(value) 
}

// find index of arr using for in loop in this condtions 
for(let index in arr ){
    console.log(index)
}
