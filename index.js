import readline from 'readline';
import { convertirDolaresAEuros, convertirDolaresALibras } from './conversor.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa la cantidad en dólares: ', (cantidadDolares) => {
  const cantidadEuros = convertirDolaresAEuros(cantidadDolares);
  const cantidadLibras = convertirDolaresALibras(cantidadDolares);

  console.log(`${cantidadDolares} dólares equivalen a ${cantidadEuros} euros.`);
  console.log(`${cantidadDolares} dólares equivalen a ${cantidadLibras} libras.`);

  rl.close();
});
