// function fn(){
//     //statements
// }
// console.log(fn());// undefined

// function fn2(agee){
//     this.age=agee
// }
// let obj=new fn2();
// console.log(obj);
// console.log(new fn2());

// async function fn2(){
//     //statements
// }
// console.log(fn2());//promise

// async function fn3(){
//     //statements
//     return 100;
// }
// console.log(fn3());//promise

// async function fn4(){
//     //statements
//     return "hello";
// }
// console.log(fn4());//promise


//practice questions

//  async function fn() {
//     console.log(40);
//     let data= await fetch("https://icanhazdadjoke.com/slack");//time consuming task
//     let finalData=await data.json();//time consuming task
//     console.log(finalData);

//     console.log(50);
//     console.log(60);
//     // fn2();
// }
// function fn2(){
//     console.log("abc");
//     console.log("def");
// }
// fn();
// fn2();




//scenario-1
//  async function fn() {
//     console.log(40);
//     let data= fetch("https://icanhazdadjoke.com/slack");//time consuming task
//     console.log(data);

//     console.log(50);
//     console.log(60);
// }
// console.log(10);
// fn();
// console.log(100);



//scenario-2
//  async function fn() {
//     console.log(40);
//     let data= await fetch("https://icanhazdadjoke.com/slack");//time consuming task
//     let finalData=await data.json();//time consuming task
//     console.log(finalData);

//     console.log(50);
//     console.log(60);
//     console.log(50);
//     console.log(60);
//     console.log(50);
//     console.log(60);
//     console.log(50);
//     console.log(60);
// }
// console.log(10);
// fn();
// console.log(100);