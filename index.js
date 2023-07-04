// index.js

const readline = require('node:readline');
const conversor = require('./conversor');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa la cantidad en dólares: ', (cantidadDolares) => {
  const cantidadEuros = conversor.convertirDolaresAEuros(cantidadDolares);
  const cantidadLibras = conversor.convertirDolaresALibras(cantidadDolares);

  console.log(`${cantidadDolares} dólares equivalen a ${cantidadEuros} euros.`);
  console.log(`${cantidadDolares} dólares equivalen a ${cantidadLibras} libras.`);

  rl.close();
});
