let name ={
    firstname:"akash",
    secomdname:"sahu",
    location:"jaipur"
}
let name1={
    firstname:"rahul",
    secondname:"saini",
    location:"jaipur"
}

let boidata=function(hometown){
   console.log(`first name is ${this.firstname} and second name is ${this.secomdname} and loction ${this.location} and ${hometown}`)
}
// its escape convert string to encode 
const ak = escape("hello akash");
console.log(ak)

// its unescape convert string to encode 

 const unak  = unescape("hello%20akash");
 console.log(unak)

boidata.call(name,"rajgarh");
boidata.call(name1,"kota");
boidata.apply(name1,["kota"]);
const printbind =boidata.bind(name1,"kota");
console.log(printbind);
printbind();
