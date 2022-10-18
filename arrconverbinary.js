const arr = [1,2,3,4,5,6];
function binary(x){
   return x.toString(2);
}
const newarr = arr.map(binary);
console.log(newarr)
