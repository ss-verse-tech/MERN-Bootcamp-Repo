// var a= 10;
// // let b = 20;
// // const c = 30;

// console.log(a);
// // console.log(b);
// // console.log(c);
// {
//     var a = 20
// }
// console.log(a);

// Hoisting

// A varibale call before declaration
// var -- Global scope
// console.log(a);
// var a = 40;


// console.log(a);
// // TDZ-- Temporal dead zone
// let a = 10;
// console.log(b);
// const b = 20


//  Redeclaration and Reinittialization

// var a = 10;  // Declaration
// var a = 20; // Redeclaration
// a = 30; // Reinitialization
// console.log(a);
// Var -- Redeclaration and reinitialization are allowed


// let a = 10;
// // let a = 20; // Let -- redeclaration (Not allowed)
// a = 20;  // Reinitializations are allowed
// console.log(a);

// const c = 10;

// // const c = 20; //redeclaration (Not allowed)
// c = 30; // Reinitializations are also not allowed
// console.log(c);

// what is diff between let var and const

//  var -- Redeclaration and Reinitialization both are allowed

//  let - Redeclarations are not allowed but Reinitialization are allowed
//  Const - Either Redeclarations or Reinitialization, both are not allowed

//  Datatypes 

// var a = true
// console.log(typeof (a));


// Mostly These are the types of function that will use in React

//  Function 

// It is just a group of statement or block of code which is executed step by step when it is called

// 1. Function Definition , 2.Arrow Function (Most widely used in react), 3. function expression
// IIFE (Imedietely invoke function execution)


//  Function Definition -- Normal function
// function add(a,b){ 
//     return a+b
// }
// console.log(add(2,5));

// Arrow function 

// ()=>{} 
// const subtract = (a,b)=>{
//     return a-b
// }
// console.log(subtract(5,3));

// conept of this keyword


// let obj = {
//     name:"Mohit",
//     profession:"Instructor of DSA",
//     func:function(){
//         console.log(this.profession);
//     },
//     arrowfunc:()=>{
//         console.log(this);
//     }
// }
// obj.func()
// obj.arrowfunc() 

// 5 min break

// Function expression


// const func = function(){
//     console.log("I am function expression");
// }
// func()

// IIFE (Imedietely invoke function execution)

// (()=>{
//     console.log("I am IIFE");
// })()

//  CallBack function , Higher order function , Anonymous function

// Callback  -- A function which is passes as an argument with another function is known as 
// callback function

// Higher order function -- A function which takes a function as an argument is called HOF.
// function sum(a,b, subtract){
//     console.log(subtract(a,b));
//     return a+b;
// }

// function subtract(a,b){
//     return a-b;
// }

// console.log(sum(4,5,subtract));
// Array distructuring
// let arr = [1,2,3,4];
// let [a,b,c,d,e] = arr;
// console.log(a);
// console.log(b);
// console.log(e);

// Object Distructuring
// let obj = {
//     name:"Aman",
//     age:20,
//     profession:"Student"
// }

// let {name, age} = obj
// console.log(name,age);

// Spread Operator


// let arr = [1,2,3,4];
// let arr1 = [5,6,7,8];
// let newArr = [...arr, ...arr1];

// console.log(newArr);

// Rest Operator

// function add(...val){
//     return val
// }
// console.log(add(1,2,3,4,"mohit", {name:"Arjun"}));

