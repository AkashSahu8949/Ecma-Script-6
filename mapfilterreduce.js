//map  is return new array 
const arr = [2,3,4,5,6,7,8,9];
let map1 = arr.map((value,index,array)=>{
//console.log(index);
return value;
})
//console.log(map1,'sssssssssssss');

// filter  is filter value in array
const arr2 = [2,3,4,5,6,7,8,9];
 var avb =  arr2.filter((a)=>{
       return  a<5;
})
//console.log(avb);


// reduce is store array in single value 
const arr3 = [1,2,3,4,5]
const arr4 = [1,2,3,4,5]
const reduce1 = arr3.reduce((h1,h2)=>{b 
return h1+h2
})
const reduce2 = arr4.reduce((h1,h2)=>{
    return h1+h2
    })

console.log(reduce1+reduce2);
