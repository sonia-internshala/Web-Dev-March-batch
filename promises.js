//user defined constructor function
// function Abc(aa){
//     this.a=aa;
// }
// let n1=new Abc();

//in-built constructor function
let p=new Promise(function(resolve,reject){
    // let data=130;
    // if(data%2==0){
    //     resolve("Promise resolved!");
    // }
    // else{
    //     reject("Promise rejected!");
    // }


     resolve("Promise resolved!");
     reject("Promise rejected!");
});


// console.log(p);//object hold

p.then(function(message){
    console.log(message)
})
p.catch(function(error){
    console.log(error);
})
// p.finally(function(){
//     console.log("Work done!! promise executed")
// })