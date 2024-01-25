// importação
const funcoes = require('./getsprints');

console.log(funcoes);
console.log(funcoes.gets());

const {gets , print} = require('./getsprints');
print(gets());
