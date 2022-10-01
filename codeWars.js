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


// 4
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Nota: Definir como constantes el minimo y el maximo con un operador condicional (en este ejemplo se uso un ternario), de
// Definir una variable suma y crear un ciclo for con el minimo, en donde si este minimo aun no es igual al maximo se sumara uno
// y se sumara a la variable suma.
function getSum(a ,b){
    const min = a < b ? a : b;
    const max = a < b ? b : a;

    let sum = 0;
    for(let i = min; i<= max; i++){
        sum += i;
    }
    return sum;
}
let resultado4 = getSum(2,6);
console.log(resultado4);

// 5
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
// Nota: para sacar el exponente, pasamos el value a toString para ejecutar el metodo length con eso, podemos identificar la cantidad de numeros 
// al value tenemosq que separarlos con toString y split 123 => "1", "2", "3"
// Declarar las variables para un bucle for
// "si [i] es menor que la cantidad de numeros (realizados con split y contados con length), toma ese numero y elevalo por el exponente definido y se
// suma en la variable 'SUMA'"
function narcissistic(value) {
    const exponente = value.toString().length
    const numero = value.toString().split('')
    
    let expo = 0;
    let suma = 0;
    for(let i = 0; i < numero.length; i++){
        expo = Number(numero[i]**exponente)
        suma += expo;
        
    }
    
    if(suma == value){
        return true
    }else{
        return false
    }

  }
  
let resultado5 = narcissistic(153)
console.log(resultado5)

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// NOTA: EL "ISOGRAM" si esta vacio es true, es la primera confirmacion que buscamos con un if
// el parametro lo dejamos todo en minuscula en la linea 119
// creamos 2 variables, arr y arrSort, la primera contendra la separacion con el metodo split separado por comillas simpels
// y el arrSort, crera un nuevo array y estara ordenado con el metodo sort
// Creamos bucle for "si el contador es menor que el largo de caracteres de arrSort, se suma 1 -- IF si es que en el arrSort posicion contador mas 1
// y se compara con arrSort para verificar si este no es igual al reccorrido que se genera, si son iguales devuelve false", ya si no presenta una igualdad devuelve true
function isIsogram(str){
    if(str.isEmpty){
        return true;
    }else{
        str = str.toLowerCase()
    }
        let arr = str.split('');
        let arrSort = arr.slice().sort()

        for(let i = 0; i < arrSort.length; i++){
            if(arrSort[i + 1] == arrSort[i]){
                return false
            }

        }
            return true;

        }
        
        



let resultado6 = isIsogram("")
console.log(resultado6)