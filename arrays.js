let array=[12,45.2,false,true,"hello"];
// console.log(array);
// console.log(array[0]);console.log(array[1]);console.log(array[2]);
// console.log(array.length);

let array2=[1000,2000];
let array3=["how","are","you?"];

//concat concatenation grouping the array
// let result=array3.concat(array,array2);
// console.log(result);

//join method-> converts the array into string

// let ans=array2.join("#$@");
// console.log(ans);

//add
// in the beginning->unshift
array2.unshift(3000);
array2.unshift(4000);
// console.log(array2);

// in the end of the array->push
array2.push("bike");
array2.push("car");
// console.log(array2);

//delete
//in the beginning->shift
array2.shift();


//in the end->pop
array2.pop();
array2.pop();
// console.log(array2);

//modifying
array3[1]="were"
// console.log(array3);

array3[0]="what";
// console.log(array3);

// let slicedArray=array.slice(1,3)//subarray from index 1 to 2
// console.log(slicedArray);

console.log(array.includes(45.2));






