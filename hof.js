// 1.when a function a is taking a function b as an argument/parameter then a is HOF
// function a(value){
//     console.log("I am a");
//     console.log(value);//b function will be printed as it is
// }
// function b(){
//     console.log("I am b");
// }
// a(10);
// a("pen tablet");
// a(true);

// a(b);

// 2.when a function a returns another function b as a result then a is HOF

// function laptop(){//laptop is HOF
//     // return "hello";
//     // return 34.5;
//     // return false;
//     function macbook(){
//         console.log("I am a macbook");
//     }
//     return macbook;
// }
// console.log(laptop());


//array methods-> forEach(), map(), filter(), find(), some(), every(), reduce()

// forEach()
// forEach() ->array method->takes a callback fn->takes two arguments->returns nothing

// let array=[10,20,30,40,50];

// array.forEach(function(){

// })

// array.forEach(function(diff,index){
//     // console.log(`${value} and ${index}`);//you can do anything
//     // console.log(diff*index);
//     // return 10;
// })
// console.log(ans);

// array.forEach(function(element,index){
//     console.log(element**index);
// })


/***************************************************************************** */
// let array=[10,20,30,47,51];

//map()->array method->takes a callback fn->accpets two args->return a new array and size
//of new array= original array

// let newarray=array.map(function(value,index){
//     // return value>20;
//     if(value>20){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(array);
// console.log(newarray);
/******************************************************************** */

//filter()->array method->takes a callback->accepts 2 arguments->return a new array->
//it's not compulsory that size of new array is == to original array

//Internal Implementation
// function filter(){
//     let result=[];

//     for(let i=0;i<array.length;i++){
//         let result=callback(array[i],i);
//         if(result==true){
//             result.push(array[i]);
//         }
//     }
//     return result;
// }

// let newarray=array.filter(function(value,index){
//     if(value>20){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(array);
// console.log(newarray);

/***************************************************************************** */

// some()->array method->takes a callback fn->takes 2 args->return a boolean value

// let array=[10,20,10,10,10];

// let ans=array.some(function(value,index){
//     if(value==10){
//         return true;
//     }
//     // return value>10;
// })
// console.log(`some ${ans}`);

//every()->array method->takes a callback->takes 2 args->returns a boolean
// let ans2=array.every(function(value){
//     if(value==10){
//         return value;
//     }
// })
// console.log(`every ${ans2}`);

/***************************************************************************** */

// find()->array method->takes a callback->takes 2 args->return 1st occurence

let array=[100,20,10,10,10];
let ans=array.find(function(value,index){
    console.log(`${index}`);
    if(value==10){
        return true;
    }
})
console.log(ans);






