function pattern(p){
    for(var i=1;i<=p;i++){
        char =" ";
        for(var j=1;j<=p;j++){
            if(j<=i){char +=j+" ";}
        }
        console.log(char)
    }
}
pattern(5);
 function decrment(){
    for (var i = 10; i >0; i--)
    console.log(i*2)
 }
 
  decrment()