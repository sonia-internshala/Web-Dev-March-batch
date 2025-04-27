function Person(namee,coursee){
    this.name=namee;
    this.course=coursee;
    this.greet=function(){
        console.log(`${this.name} from ${this.course} says Good Afternoon!`);
    }
}
let p1=new Person("Yash","B.Tech.");
p1.greet();
console.log(p1);

let p2=new Person("Rahul","Bsc");
p2.greet();
console.log(p2);

/******************************************************************************* */

class Person1{
    constructor(namee,coursee){
        this.name=namee;
        this.course=coursee;
    }
    greet(){
        console.log(`${this.name} from ${this.course} says Good Afternoon!`);
    }
    hello(){
        console.log(`${this.name} from ${this.course} says hello!`);
    }
}
let p3=new Person1("Sohit","M.Tech.");
let p4=new Person1("Mohit","Msc");
p3.greet();
p4.hello();
console.log(p3);
console.log(p4);

