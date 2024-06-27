const nome = 'Thomas';
const sobrenome = 'neves';
const idade = 25;
const peso = 88;
const altura = 1.73;

let imc;
let anonascimento

imc = peso/(altura*altura);
anonascimento = 2024 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg,`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc},,`);
console.log(`${nome} ${sobrenome} nasceu em ${anonascimento}.`);


