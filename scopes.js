//global script block functional local(block+functional)

//2 categories
//indepnedent of block {...}->global & script
//var -> global scope
//let & const -> script scope

// var a=10;//global
// let b=20;//script
// const pi=3.14;//script

//dependent on block {...}-> functional & block
// var + {} and that {} is of a function -> functional
// function f(){
//     var a=10;// functional
// }
// f();
// // var + {} and that {} is not of a function -> global
// {
//     var a=10;//global
// }

// if(true){
//     var b=10;//global
// }
// //let & const + {} ->block
// function f1(){
//     let x=10;//block
//     const y=90;//block
// }
// f1();
// {
//     let v=10;//block
//     const w=90;//block
// }

//Practice Questions:
// var a=10;//global
// const pen=1000;//script

// if(true){
//     var e=12;//global
//     let d="umbrella";//block
// }

// function f(){
//     const t=23;//block
//     let p=78;//block
//     var str="pen tablet";//functional
// }
// f();


// var a=10;
//  function abc(){
    // console.log(a);//hoisting undefined
    // var a=1000;//declaration
    // console.log(a);//1000
//  }

// abc();
// console.log(a);//10

// var a=10;
//  function abc(){
//     console.log(a);// error 10
//     // var a=1000;
//     console.log(a);// error 10
//  }

// abc();
// console.log(a);//10

// var a=10;
//  function abc(){
//     console.log(a);// 10 undefined
//     a=1000;
//     console.log(a);// 1000 1000
//  }

// abc();
// console.log(a);//1000 10


// var a=10;
//  function abc(){
//     console.log(a);// undefined
//     a=1000;
//     var a=8000;
//     console.log(a);// 
//  }

// abc();
// console.log(a);//


// var a=10;
// console.log(a);//10
//  function abc(){
//     console.log(a);// ref err->cannot access a before initialisation
//     let a=10;
//     console.log(a);// 
//  }

// abc();
// // console.log(a);//
