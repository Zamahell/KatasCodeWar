// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Nota: para devolver el orden descendente primero debe transformar el parametro a String, para ocupar el metodo
// Split el cual divide el parametro y lo convierte, luego ocupar el metodo sort el cual ordena de forma ascendete
// y despues ocupar el metodo reverse para devolver el valor inverso, ya al final usar un join, para devolver unir el parametro y quede de la forma en que se solicita 
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

let resultado = descendingOrder(8279828);
console.log(resultado)


// 2
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
// Nota
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

let resultado2 = getCount("my pyx")
console.log(resultado2)

// 3
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// Nota: El toString(2) devuelve el numero en binario
function addBinary(a,b) {
    let suma = a + b;
    let binario = suma.toString(2);
    return binario
  }


let resultado3 = addBinary(9, 1);
console.log(resultado3)