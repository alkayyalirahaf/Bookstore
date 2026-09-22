//Q1

console.log(-9*3);//-27
console.log("value is " + 50);//value is 50
console.log(17%5);//2
console.log(5%17);//5
console.log(5/10);//0.5
console.log(4==4);//true
console.log(4!=5);//true
console.log(7<=8);//true

//9.
console.log(Math.ceil(7.7)-Math.floor(7.7));//1
console.log(Math.ceil(7)-Math.floor(7));//0

console.log(typeof(100));//number
console.log(typeof(73.9));//number
console.log(typeof(NaN));//number
console.log(typeof("Water"));//string
console.log(typeof(false));//boolean
console.log(typeof(9!=11));//boolean

console.log("Orang" + "e");//Orange
console.log("Orange"-"s");//NaN
console.log("4"+"8");//48
console.log("4"-"8");//-4

console.log("name" + 3);//name3
console.log("name"-3);//NaN

console.log(82*"word");//NaN
console.log(1+"hello");//1hello
console.log("hello"+ 1);//hello1

console.log(1+true);//2
console.log("hello"+true);//hellotrue
console.log(typeof(infinity));//undefined
console.log(1=='1');//true
console.log(1==='1');//false




//Q2
// let x  = prompt("enter a number");
// alert(x);

//Q3

// let num1=prompt("enter the first number");
// let num2=prompt("enter the second number");

// if (num1 < num2){
//     alert("ascending order" + num1 +" "+num2);
// }
// else{
//     alert("ascending order" + num2 +" "+num1);
// }


//Q4
// let n1=prompt("enter number :");
// let n2 =prompt("enter the second number :");
//  if (n1>n2){

//     alert(n1);}

//     else{
//         alert(n2);
//     }
 

//Q5
//  let n1=prompt("enter number :");
//  let n2 =prompt("enter the second number :");
//  n3 = n1+n2;
// alert(n3);//alert returns strings;


//Q6
// let number=prompt("enter number between 1 and 9:");

// switch (Number(number))
// {

//     case 1: console.log("one");break;
//     case 2: console.log("Two");break;
//     case 3: console.log("Three");break;
//     case 4: console.log("Four");break;
//     case 5: console.log("Five");break;
//     case 6: console.log("six");break;
//     case 7: console.log("Seven");break;
//     case 8: console.log("eight");break;
//     case 9: console.log("Nine");break;
//     default: console.log("please Try Again ")
    


// }

//Q7

// let birthYear = Number(prompt("Enter Your birthday"));
// let currentYear = 2026;
// let age = currentYear - birthYear;

// if (age < 18 )
// {
//     alert("You may join the kids' program");

// }else if (age >= 18 && age <= 30){
//     alert("You are eligible. Start your application");

// }

// else if (age >30 && age <60){
//     alert("You are not eligible. You may join other programs");

// }else {
//    alert("You may join the seniors' program");
// }

//Q8
// function swapCase(text){
//     let result = ""

//     for (let i = 0 ; i <text.length ; i++){

//         let char = text[i];

//         if(char===char.toUpperCase()){
//             result += char.toLowerCase();

//         }

//         else { result += char.toUpperCase()}
//     }
// return result;
// }
// console.log(swapCase("orAnGe"));




//Q9


function toCamelCase(text){
    let words = text.split(" ")
    let result = "";

    for(let i = 0;i<words.length;i++){
        if(words[i].length>0){
            result += words[i][0].toUpperCase()+words[i].slice(1);
        }
    }
    return result;
}
console.log(toCamelCase("Coding Academy by Orange"));




