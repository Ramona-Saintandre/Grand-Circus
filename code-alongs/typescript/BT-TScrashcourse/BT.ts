// BT crash course link https://www.youtube.com/watch?v=rAy_3SIqT-E
let myString:string;
let myNum: number;
let myBool :Boolean;
let myVar : any;
let strArr:string[];
let numArr: number[];

myString = 'Hi, My name is Ramona'+'I am learning'+'typeScript'.slice(0,4);
myNum = 5+5;
myBool = false;
strArr = ['Hello', 'World']
numArr = [1.2,2.4,3.6,]

console.log(myString);
console.log(myBool);
console.log(myNum);
console.log(strArr);
console.log(numArr);

// Tupal

let strNumTuple:[string,number]
strNumTuple = ['Hello',4,6,8,12]
console.log(strNumTuple);
// not sure why I am getting this error message, it is consoling out to the console though 
// BT.ts:24:1 - error TS2322: Type '[string, number, number, number, number]' is not assignable to type '[string, number]'.
//   Types of property 'length' are incompatible.
//     Type '5' is not assignable to type '2'.

// 24 strNumTuple = ['Hello',4,6,8,12]

// void/undefined/null

let myVoid: void = undefined;
console.log(myVoid);



