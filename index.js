/*1: Create a function called greet that logs the string "Hello, World!" to the console.
function greeting (){
    console.log ("Hello World");
}

// 2: Write a function named favoriteNumber that logs your favorite number (e.g., 42) to the console.
function favoriteNumber (){
    console.log(45);
    
    
}
// 3: Create a function called magicEightBall that logs a random response from the following list: "Yes", "No", "Maybe", or "Ask again later".
function magicEightBall (){
    const listresponse =["yes", "NO", "Maybe", "Ask again"]
    const randomAnswer = Math.floor(Math.random() * listresponse.length);
    return listresponse[randomAnswer];
}
console.log(magicEightBall());

// 4 :Write a function called getCurrentYear that logs the current year to the console using the Date object.
function getCurrentYear() {
    const year =  new Date().getFullYear();
    console.log(year);
}
// 5 :Create a function called tellJoke that logs a random joke from a predefined list of jokes to the console.
function telljoke (){
    const listjokes = ["Here comes joke for kids.......","Here comes jokes for students.... ","Here comes jokes for teenager......"]; 
    const randomValue = Math.floor(Math.random() * listjokes.length);
    return listjokes[randomValue];
}
console.log(telljoke());

//#######  Functions with Parameters (One or More)  #######

// 6: Write a function named personalGreeting that takes a name as a parameter and logs a greeting string (e.g., "Hello, [name]!") to the console.
function personalGreeting(name) {
    console.log("Hello " + name + "!");
}
 */
// 7:Create a function called add that takes two numbers as parameters and logs their sum to the console.
function add(num1, num2, ) {
    const result = num1 + num2;
    console.log(`The result is ${result}`);
  }
  // 8: Write a function named ageInMonths that takes a person's age in years as a parameter and logs their age in months (e.g., age * 12).
  function ageInMonths(age){
    const ageinMonths = (age *12);
    console.log(`your age in months is ${ageinMonths}`);

  }

  /* 9:Create a function called celsiusToFahrenheit that takes a temperature in Celsius as a parameter and logs the equivalent temperature in Fahrenheit to the console.
function celsiusToFahrenheit(C){
    const tempinFahrehet = (C * 9/5+32);
    
    return tempinFahrehet;

}*/
  //const newtemprature = celsiusToFahrenheit();
// 10: Write a function named getFullName that takes two parameters, firstName and lastName, and logs the full
//name as a single string (e.g., "John Doe") to the console.
  function getfullName(firstName, lastName) {
    const fullname =  firstName  +" "+ lastName;
    console.log(`Your full name is : ${fullname}`); 
  } 
  
  // 11: Create a function called calculateArea that takes the length and width of a rectangle as parameters and logs the area to the console.

function calculateArea(length,width){
    const area =  (length * width);
    console.log(`Area of rectangel is : ${area}`);

}// 12: Write a function named findMax that takes two numbers as parameters and logs the larger of the two.
function findMax (numb1, numb2){
const maxnum = Math.max(numb1, numb2);
console.log(`The max number is : ${maxnum}`);
}
// 13: Create a function called countVowels that takes a string as a parameter and logs the number of vowels (a, e,
 // i, o, u) in that string.
 
 function countVowels(str){
  let count = 0;
const vowels = [ "a", "e", "i", "o", "u"]

for( const letter of str.toLowerCase()) {

  if( letter.include(vowels)){
      count++;
  }
  return count;
}

 }
 // 14: Write a function named calculateDiscount that takes the original price and the discount percentage as
// parameters and logs the price after discount to the console.
function calculatDiscount(orignalprice, percentdiscount){
  newprice = orignalprice - (percentdiscount/100 * orignalprice);
  return newprice;
}

//Create a function called reverseString that takes a string as a parameter and logs the string reversed to the console.

function reverseString(str){
 newString= str.split("").reverse().join("");
 console.log(newString)
}
//######### intermediate level questions ##########

// 1 : Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.
function isPalindrome(str){
   reverse = str.split("").reverse().join("");
   if (reverse == str){
    return true
   }else{
    return false;
   }

}
// 2 : Create a function named fizzBuzz that takes a number as a parameter and returns:
//"Fizz" if the number is divisible by 3,
//"Buzz" if it is divisible by 5,
//"FizzBuzz" if it is divisible by both, and
//the number itself if none of these conditions are met.
 function fizzBuzz (num){
 if (num % 3 === 0){
  console.log("Fizz");
  }
  else if (num % 5 === 0){
  console.log("Buzz");
  }
  else { ((num % 3) === 0  && (num % 5) === 0 )
    console.log("FizzBuzz");
  }
 }
 // 3:Write a function called factorial that takes a positive integer as a parameter and returns the factorial of that number (e.g., 5! = 5 × 4 × 3 × 2 × 1).
  
 function factorial( positivnum){
    for (i = (positivnum-1); i > 0;i--){
  positivnum *= i;
  console.log(`Factorial of the number is : ${positivnum}`)
 }
 }
 
 // 4: Create a function named findLongestWord that takes a string (a sentence) as a parameter and returns the longest word in that sentence.
 function findLongestWord(string){
   let splitstring = string.split("");
    let longestword = " ";
    
    for (let word of splitstring ){
      if (word.length > longestword.length){
      
        longestword = word;
    
      }
    }
     return longestword;
}
 
// 5 : Write a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers
function calculateAverage(numBers){
if (!Array.isArray(numBers)){
  throw new Error("Please enter array of numbers")

}
let medelvärdet = 0;
let sum = 0;
for ( let i = 0; i < numBers.length; i ++){
    sum += numBers[i];
    medelvärdet = sum/numBers.length
    console.log( medelvärdet );

} 

}


// 6 : Create a function named removeDuplicates that takes an array as a parameter and returns a new array with duplicate values removed.
function removeDuplicates(array){
  if (!Array.isArray(array)){
    throw new Error("Please enter array of elemnents")
}

let newarray= [];
array.map(elements => !newarray.includes(elements)? (newarray).push(elements):"")
return newarray;

}
// 7: Write a function called capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.

  const capitalizeFirstLetter = function(argument){
       return argument.charAt(0).toUpperCase() + argument.slice(1); 

     
    }
    
    
  

// 8 :Create a function named countOccurrences that takes a string and a character as parameters and returns the number of times the character appears in the string.
function countOccurrences(string, character){
 let numberss = 0 ;

  for(let i = 0 ; i < string.length; i++){
    
    
    if(string[i] === character){
      numberss++;
      
    }
    


  }
  return numberss;
  
}
// 9: Write a function called mergeArrays that takes two arrays as parameters and returns a new array that contains all the elements from both arrays, ensuring no duplicates.
function mergeArrays(array1,array2){
  if (!Array.isArray(array1,array2)){
    throw new Error("Please enter any two arrays of elemnents")
}
const newArray =  [...new Set([...array1, ...array2])]//array1.cocatnet(array2);
console.log(newArray);
}

// 10 :Write a function called generatePassword that takes a length as a parameter and returns a randomly generated password of that length, using uppercase letters, lowercase letters, and numbers.
function generatePassword(length){
  const mychacracters = " abcdefghijklmnopqrstuvwxyzo123456789ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  let passward = "";
   for( let i =0 ; i < length; i ++ ){
    
    const randomselection = Math.floor(Math.random() * mychacracters.length);
    passward += mychacracters[randomselection];
    

  }
  return passward;
}
// 11 :Create a function named charFrequency that takes a string as a parameter and returns an object with each character as a key and the number of times it appears in the string as the value.
//function charFrequency(){}
// 12 : Write a function called arrayIntersection that takes two arrays as parameters and returns a new array containing only the elements that are present in both arrays.
function arrayIntersection(array1,array2){
  let sameelements = [];
  for (let i = 0; i < array1.length; i++){
    if (array2.includes(array1[i])){
      sameelements.push((array1[i]));
    }  
  }
  return sameelements;
}
// 13: Create a function named reverseWords that takes a string as a parameter and returns the string with the order of the words reversed (e.g., "Hello World" becomes "World Hello").
function reverseWords (str){
  for (let i = str.length; i > 0; i--){
   
     let newString= '';
    newString += (str[i]);
    

    
  }
  return newString;
  
}
// 14: Write a function called findMin that takes an array of numbers as a parameter and returns the smallest number in the array.
function findMin(array){
  let minnumber = array[0] ;
for (let i = 0; i < array.length; i +=1){   
    if (array[i] < minnumber)
        minnumber = array[i];
    }
      
return minnumber;

  
}


