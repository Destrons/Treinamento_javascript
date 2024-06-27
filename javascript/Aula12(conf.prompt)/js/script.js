/*
window.alert('Com a nossa mensagem'); // inicia um alerta de alerta no vanegador com um botão de ok
window.confirm('deseja realmente apagar?'); // inicia um alerta com as opções de cancelar (false) e ok(true)
window.prompt('digite seu nome:'); // inicia um alerta com um campo para escrever o testo solicitado 
*/
/*
let confirma = confirm('Realmente deseja continuar?');
console.log(confirma);
*/
let num1 = prompt('digite um numero:'); //ira capturar o valor informado como string
let num2 = prompt('digite outro numero:'); //ira capturar o valor informado como string
num1 = Number(num1); //converte o valor de string para number
num2 = parseInt(num2); //converte o valor de string para number
const resultado = num1 + num2; 

console.log(resultado);

// window.alert('a soma dos dois numero e: ' + resultado);  apresenta o resultado dos valores que foram inseridos

window.alert(`a soma dos dois numero e: ${resultado}`);



