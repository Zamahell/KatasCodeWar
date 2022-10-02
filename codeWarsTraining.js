// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let arr = []
    let suma = 0

    for(let i = 0; i < numbers.length; i++){
        arr.push(numbers[i]**2)
        suma += arr[i]
    }
    return suma

}

// let resultado = squareSum([1, 2, 2])
// console.log(resultado)

// 2
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  if(number%2 === 0){
    return "Even"
  }else{
    return "Odd"
  }
  
}

// let resultado = even_or_odd()
// console.log(resultado)

function even_or_odd(number) {    
    return (number%2==0) ? "Even" : "Odd";
  }

//   let resultado1 = even_or_odd(1)
//   console.log(resultado1)




//   Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
    return arr.join('', 2);
  };


//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
  function century(year) {
    return Math.ceil(year/100)
  }



//   Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//   For example,
/*[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]*/
function countSheeps(arrayOfSheep) {
    let ovejas = 0

    for(let i=0; i<arrayOfSheep; i++){
        if(i==true){
        ovejas += 1;
        }else{
        ovejas += 0;
        }
    }
}


// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
    return (n%x === 0 && n%y === 0) ? true : false
}

let resultadoIsDivisible = isDivisible(24,4,6)
console.log(resultadoIsDivisible)


// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"
function repeatStr (n, s) {
    return s.repeat(n)
}

let resultadoRepeatStr = repeatStr(2, "sexo");
console.log(resultadoRepeatStr)


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function oddCount(n){
 return Math.floor(n/2);
}

let resultadoOddCount = oddCount(10);
console.log(resultadoOddCount)



// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aáAÁeéEÉiíIÍoOóÓuúÚ]/gi, '')
}

let resultadoDisemvowel = disemvowel("This website is for losers LOL!")
console.log(resultadoDisemvowel)


// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  const vocales = "aáeéiíoóuú";
  let cuentaVocales = 0

  for(const letra of str){
    if(vocales.includes(letra.toLowerCase())){
      cuentaVocales++
    }
  }
  return cuentaVocales;
}

let resultadoVocales = getCount("Hola mundo animal")
console.log(resultadoVocales)


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
  let x = str.match(/x/)
  let o = str.match(/o/)
  return x == o;
}

let resultadoXO = XO("ooxxx")
console.log(resultadoXO)

