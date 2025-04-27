//object literals->{.......}
//object has properties and functions(tasks) in key:value pair format


// fn:function(){
    
// }
// let obj={};
// obj.color="red";

// console.log(obj);


// let smartphone={
//     brand:"Apple",
//     model:"Iphone 13 pro",
//     memory:"128GB",
//     color:"white",//properties

//     call:function(){
//         console.log("Smartphone calls");//method
//     },

//     takephotographs:function(){
//         console.log("Smartphone takes photographs");//method
//     }
// }
//method- functions inside objects
//Two ways of accessing key value pairs

//. notation
// console.log(smartphone.model);
// smartphone.takephotographs();

// smartphone.call();
// console.log(smartphone.memory);



//[ ] notation

// console.log(smartphone[brand]);//wrong
// console.log(smartphone["brand"]);//right
// console.log(smartphone["color"]);//right

// let smartphone={
//     // brand:["Apple","oneplus"],
//     // model:"Iphone 13 pro",
//     // memory:"128GB",
//     // color:"white",//properties

//     call:function(){
//         console.log("Smartphone calls");//method
//     },

//     takephotographs:function(){
//         console.log("Smartphone takes photographs");//method
//     }
// }
// console.log(smartphone.brand[1]);
//looping in the object
//for ...  in

// for(let key in smartphone){
//     console.log(smartphone[key]());
// }

// console.log(smartphone.call);
// smartphone.call();

