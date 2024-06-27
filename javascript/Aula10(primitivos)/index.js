// Dados primitivos string, number, undefined, null, boolean, symbol.
const nome = 'Thomas'; //string
const nome1 = "Thomas"; //string
const nome2 = `Thomas`; //string

const num = 10; //number
const num1 = 10.52; //float number

let nomealuno; // 'undefined' não aponta para local nenhuma na  memória
const sobrenomealuno = null; //"nulo" -> não aponta para local nenhuma na  memória
const aprovado = true; // valor boolean sendo verdadeiro (true) ou falso (false), valor logico

//console.log(typeof aprovado, aprovado);

const a = [1, 2];
const b = a;

//console.log(a, b);

b.push(3);
console.log(a, b); // isso e uma copia de valores entre variaveis onde o valor ira se repetir em ambos, substituinto o valor.