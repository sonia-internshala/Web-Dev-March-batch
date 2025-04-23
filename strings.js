//string

//collection/set of characters

//three ways to create string
//1. " "->double upper quotes
let s1="hello";
console.log(s1);

//2. ' '->single quotes
let s2='world';
console.log(s2);

let s3=`batsmanwoman`;

//3. backticks-> template literals
// let s3=`batsmanwoman`;
// console.log(s3);

//in-built
// 1.length
console.log(s3.length);
console.log(s3.toUpperCase());
console.log(s3.toLowerCase());
console.log(s3[0]);//b
console.log(s3.charAt(1));//a
console.log(s3.charAt(2));//t
console.log(s3.includes("doctor"));
console.log(s3.indexOf("tt"));

let str="mango|apple|orange";
let ans=str.split("|");
console.log(ans);

let time="10:34:45";
let ansarr=time.split(":");
console.log(ansarr);

let date="16-4-2025";
let ansarrr=date.split("-");
console.log(ansarrr);

console.log(s1[-1]);





let s4="batsmanwoman";
//replace
let res=s4.replace("man","can");
console.log(res);

//replaceAll

let ress=s4.replaceAll("man","can");
console.log(ress);








