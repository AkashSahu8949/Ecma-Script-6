function createrobo(name){
    return{
        name:name,
        talk: ()=>
        {
            console.log(`my name is ${name}`);
        }
    };
}
const name11 = createrobo('akash');
name11.talk();
const name12 = createrobo('sahu');
name12.talk();