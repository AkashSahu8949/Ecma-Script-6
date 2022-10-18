var obj1 ={a:10,b:10,c:10};
var obj2 ={b:10};
var obj3 ={c:10};
var obj4 ={d:10 ,a:10};
var obj5 ={e:10};
var obj6 ={f:10};
var new_obj = Object.assign(obj1,obj2,obj3,obj4,obj5,obj6);
console.log(new_obj);