//this keyword refer to who is calling it or where it is called.

//5 Types of this's:
//1. direct calling
//2. method calling
//3. constructor function calling
//4. arrow function calling
//5. indirect calling

//direct calling or function calling(that function is independent)

// console.log(this);

// function fn(){
//     console.log(this);
// }
// fn();

//method calling-> this points to current object inside which it is

// let obj={
//     a:10,
//     b:"pen tablet",
    
//     fn:function(){
//         console.log(this);//obj
//     }
// }
// // fn();//wrong
// obj.fn();//right






// let obj={
//     a:10,
//     b:"pen tablet",
    
//     fn:function(){
//         console.log(this);//obj
//         function print(){
//             console.log(this);//
//          }
//         print();//window
//     }
// }
// // fn();//wrong
// obj.fn();//right


// let obj={
//     a:10,
//     b:"pen tablet",
    
//     fn:function(){
//         console.log(this);//global window
//         function print(){
//             console.log(this);//global window
//          }
//         print();
//     }
// }

// // print the function ->function fn(){.....}
// // call the function-> output will be printed
// // obj.fn();
// let fnn=obj.fn;
// fnn();

// let obj={
//     a:10,
//     b:"pen tablet",
    
//     obj2:{
//         fn:function(){
//             console.log(this);//obj2
//             function print(){
//                 console.log(this);//global window
//              }
//             print();
//         }
//     }
// }

// obj.obj2.fn();

//constructor fn calling

// function rectangle(length,breadth){
//     this.len=length;
//     this.bre=breadth;
//     console.log(this.len);
//     console.log(this.bre);
// }
// let rectangle1=new rectangle(10,20);
// let rectangle2=new rectangle(30,40);
// let rectangle3=new rectangle(1,2);

//arrow function calling->this will point to parent obj ka this


// let obj={
//     a:10,
//     b:"pen tablet",
    
//     fn: ()=>{
//         console.log(this);//global window obj
//     }
// }
// obj.fn();

// let obj={
//     a:10,
//     b:"pen tablet",
    
//     f:function(){
//         console.log(this);//obj
//         fn=()=>{
//             console.log(this);//obj
//         }
//         fn();
//     }
// }
// obj.f();

// let obj={
//     a:10,
//     b:"pen tablet",
    
//     f:()=>{
//         console.log(this);//global window
//         fn=()=>{
//             console.log(this);//global window
//         }
//         fn();
//     }
// }
// obj.f();

// let obj={
//     a:10,
//     b:"pen tablet",
    
//     f:()=>{
//         console.log(this);//global window object
//         function fn(){
//             console.log(this);//global window object
//         }
//         fn();
//     }
// }
// obj.f();

// let obj={
//     a:10,
//     b:"pen tablet",
    
//     obj2:{
//         f:()=>{
//             console.log(this);//global window
//         }
//     }
// }
// obj.obj2.f();


//indirect calling

// let obj1={
//     a:10
// }

// let obj2={
//     a:20,
//     fn:function(x,y,z){
//         console.log(this.a,x+y+z);
//     }
// }
// obj2.fn(1,2,3);//this refers to obj2
// obj1.fn();

//call , apply and bind ->they change the reference of this.
// obj2.fn.call(obj1,10,20,30);//this refers to obj1
// obj2.fn.apply(obj1,[10,20,30]);

// let newfn=obj2.fn.bind(obj1,10,20,30);//it doesn;t call the borrowed fn on the spot
// newfn();
// console.log(newfn);


let obj2={
        a:20,
        fn:function(x,y,z){
            console.log(this.a,x+y+z);
        }
}
obj2.fn(1,2,3);




