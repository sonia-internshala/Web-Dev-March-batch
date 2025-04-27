// let obj={
//     a:10,
//     flag:true,
//     obj2:{
//         b:20,
//     },
//     arr:[10,20,30]
// }

//shallow copy->not-in-depth->upr upr se copy
//top-level properties and secondary (nested ) properties

//top-level properties are copied
//nested / secondary are referenced

//way-1 spread operator
// let pen_tablet={...obj};
// pen_tablet.a=1000;

// console.log(pen_tablet.a);//1000
// console.log(obj.a);//10

// let obj={
//     a:10,
//     flag:true,
//     obj2:{
//         b:20,//2000
//     },
//     arr:[10,20,30]
// }
// let pen_tablet={...obj};//way-1
// pen_tablet.obj2.b=2000;
// console.log(obj.obj2.b);//2000
// console.log(pen_tablet.obj2.b);//2000




// //way-2 assign method
// let laptop=Object.assign({},obj);//way-2
// laptop.a="hello";
// console.log(obj.a);
// console.log(laptop.a);

// laptop.obj2.b=true;
// console.log(obj.obj2.b);//true
// console.log(laptop.obj2.b);//true


//deep copy->in depth->gahrai mein copy
//top-level secondary level /nested

//structuredClone

let obj={
    a:10,
    flag:true,
    obj2:{
        b:20,
    },
    arr:[10,20,30]
}

let deepcopy=structuredClone(obj);//arrays,functions,set ,map,nested 
deepcopy.arr.push(40,50);

// console.log(obj.arr);//10,20,30
// console.log(deepcopy.arr);//10,20,30,40,50
deepcopy.obj2.b=2000;
console.log(deepcopy.obj2.b);//2000
console.log(obj.obj2.b);//20
