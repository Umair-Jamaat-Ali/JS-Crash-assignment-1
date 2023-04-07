// 1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let num1 =+ prompt("enter first number");
let num2 =+ prompt("enter second number");

if(num1 > num2){
    console.log("First number is greatest")
}
else{
    console.log("Second number is greatest")
}



//2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

let x =+ prompt("Enter a number");
if( x >= 0){
    alert("The sign is +")
}
else{
    alert("The sign is -")
}


// 3.Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let numFirst =+ prompt("Enter First number");

let numSecond =+ prompt("Enter Second number");

let numThird =+ prompt("Enter Third number");

let numFourth =+ prompt("Enter Fourth number");

let numFifth =+ prompt("Enter Fifth number");

if( numFirst > numSecond && numFirst > numThird && numFirst > numFourth && numFirst > numFifth){
    console.log("Number First is greater than other numbers")
}

else if( numSecond > numFirst && numSecond > numThird && numSecond > numFourth && numSecond > numFifth){
    console.log("Number Second is greater than other numbers")
}

else if( numThird > numFirst && numThird > numSecond && numThird > numFourth && numThird > numFifth){
    console.log("Number third is greater than other numbers")
}

else if( numFourth > numFirst && numFourth > numSecond && numFourth > numThird && numFourth > numFifth){
    console.log("Number fourth is greater than other numbers")
 }

else if( numFifth > numFirst && numFifth > numSecond && numFifth > numThird && numFifth > numFourth){
    console.log("Number fifth is greater than other numbers")
}


// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
// it will check if the current number is odd or even, and display a message to the screen.

for ( let i = 0; i <= 15; i++){
    if( i % 2 == 0){
        console.log( i + " is Even")
    }
else{
    console.log( i + " is Odd")
}

}


//5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding grade.

let studentsMarks =+ prompt("Enter your marks");

if( studentsMarks < 60 ){
    console.log("Your are failed!");
}
else if(studentsMarks < 70 ){
    console.log("Your grades is D");
}
else if( studentsMarks < 80 ){
    console.log("Your grades is C");
}
else if( studentsMarks < 90 ){
    console.log("Your grades is B");
}
else if( studentsMarks < 100 ){
    console.log("Your grades ia A");
}


// 6- . Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
//"FizzBuzz".

for (let i =1; i <= 100; i ++){
    if (i %  3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if( i % 3 === 0){
        console.log("Fizz");
    }
    else if ( i % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log( i );
    }

}

// 7. Write a JavaScript program to construct the following pattern, using a nested for loop.

for ( let i = 1; i <= 5 ; i ++){
   row = " "
   for ( let j = 1 ; j <= i ; j++){
    row += "* "
   }
   console.log( row);
}
