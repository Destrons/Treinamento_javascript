let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
/*
const temp = varA; //armazena a variavel antes de perde-la
varA = varB;
varB = varC;
varC = temp;
*/
//também pode alocar os valores das variaveis simultaneamente

[varA ,varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
