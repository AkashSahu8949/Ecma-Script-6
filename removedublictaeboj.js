const arr = [{1:1, 2:2},{3:3},{1:1,4:4},{1:1,2:2},{1:1,4:4},{3:3}];
const result = arr.filter((value,index,array)=>
index===array.findIndex((item)=>
JSON.stringify(item)===JSON.stringify(value)
)
)
console.log(result)