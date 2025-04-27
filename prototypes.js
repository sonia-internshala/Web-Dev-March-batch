let obj={
    a:10,
    flag:true,
    greet:function(){
        console.log("Hey Good Morning");
    }
}
let obj2={
    toString:function(){
        console.log("hello");
    }
}
// obj.__proto__= obj2;
// obj=Object.create(obj2);

obj.toString();
// obj.toString();
// console.log(obj.a);//10
// console.log(obj.flag);//true
// obj.greet();//hey good morning
// console.log(obj.c);//undefined
// // obj.laptop();//err
// obj.toString();//no output
// console.log(obj);