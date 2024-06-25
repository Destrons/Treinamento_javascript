
// não pode criar constante com palavra reservada por exemplo "let,console"

//constante precisa ter nome significativo

// Não pode começar o nome de uma constante com um número

// póde usar constante com camelcase

// Todas as constantes são case sensitive, diferencia caracteres minusculos e maiusculos
// não pode modificar o valor de uma constante

// declaração (var nome = 'João';), Variavel usada antigamente indicado usar const no lugar

const nome = 'joão'; // não pode reclarar valor depois
console.log(nome); 

// pode usar o valor de constante para gerar uma nova constante

const numero1 = '5';
const numero2 = 10;

const result = numero1 * numero2;

console.log(result); // apresenta resultado da soma dos dois valores, total 50

const resultdoble = result * 2;

console.log(resultdoble); // apresenta o resultado da multiplicação por 2 do resultado anterior, total 100

let resulttriple = result * 3;

console.log(resulttriple); // apresenta o resultado da multiplicação por 3 do resultado inicial, total 150

resulttriple = resulttriple + 5; // altera o valor inserido na variavel, total 155

console.log(resulttriple); // apresenta o valor resultante da soma anterior alterando a variavel e seu valor armazenado

console.log(typeof numero1); // descobre que tipo de variavel está armazenada

// somar string mais numero ira contetena-los

console.log(numero1 + numero2); // 5 + 10 = 510 sendo 5 string e 10 numer

// quando contatenar uma string com um number, o resultado e todo o valor vira string

console.log(typeof (numero1 + numero2)); 