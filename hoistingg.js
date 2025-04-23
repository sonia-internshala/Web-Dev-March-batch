// Hoisting

// 1.var-> general hositing->un-defined
// 2.let & const->dead temporal zone->reference error->cannot access before initialisation

// console.log(a);
// var a=10;

// console.log(typeof(b));//err occured
// let b="hello";

// console.log(c);
// const c=false;

//function hoisting

// print();
// function print(){
//     console.log("I am a function!");
// }

// // print();


// print();
// let print=function(){
//     console.log("I am a function!");
// }
// print();

// print();
// let print=()=>{
//     console.log("I am a function!");
// }
// print();

//practice problems

function f1(){
    console.log(b);//un-defined
    var b=90;
    console.log(c);//ref err or un-defined
    // let b=90;
    var c=78;
    // console.log(a);//un-defined
    // var a=23;
    // console.log(a);//23
}
f1();



