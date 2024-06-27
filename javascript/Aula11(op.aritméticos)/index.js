/*
 *Aritméticos
 + = Adição | concatenação
 - = subtração
 / = divisão
 * = multiplicação
 ** = potenciação
 % = Resto da divisão

Ordem dos operadores: (), **, *, /, %, +, - 
*/ 

/*const num1 = 5; 
const num2 = 10;
const num3 = '5'; // se o valor estiver como string ele ira concatenar os valores. 
const num4 = 2;
console.log(num1 + num2); //resultado 15

console.log(num3 + num2); //resultado 510

console.log(num1 - num2); //resultado -5

console.log(num1 / num2); //resultado 0.5

console.log(num3 * num2); //resultado 50

console.log(num1 ** num2); //resultado 9765625

console.log(num1 % num2); //resultado 5

console.log(num1 + num2 * num4); //resultado 25

console.log((num1 + num2) * num4); //resultado 30 

// ++ e um operador de incremento, e não pode ser usado em constante

let contador = 1; 
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5

console.log(contador); //resultado 5

console.log(++contador); //resultado 6, quando colocado o ++ antes ele incrementa antes de apresentar o valor
console.log(--contador); //resultado 5, operador de decremento, retirando um do valor antes de apresentar

let contador = 1;
contador += 2; //resultado 3
contador += 2; //resultado 5
contador += 2; //resultado 7
console.log(contador); // como resultado das operações anteriores ele ira somar de 2 em 2.

let contador = 1;
contador *= 2; //resultado 2
contador *= 2; //resultado 4
contador *= 2; //resultado 8
console.log(contador); // como resultado das operações anteriores ele ira multiplicar por 2 cada resultado. 

let contador = 2;
contador **= 2; //resultado 4
console.log(contador);
contador **= 2; //resultado 16
console.log(contador);
contador **= 2; //resultado 256
console.log(contador); // como resultado das operações anteriores ele ira potencializar por 2 cada resultado. */

//Resultado inesperado

const num1 = 10;
let num2 = 'Thomas';
console.log(num1 * num2); ///resultado NaN (not a number)
num2 = '5'; // em caso de numero ele consegue converter a string para numero e executar o resultado
console.log(num1 * num2); //resultado 50
console.log(num1 + num2); // já neste caso por padrão ele ira concatenar string com number, resultado 105
num2 = parseInt('5'); //parseInt ira converter a string para number
console.log(num1 + num2); //resultado 15
num2 = parseFloat('5.2'); //parseFloat ira converter para numer sendo flutuante
console.log(num1 + num2); //resultado 15.2





