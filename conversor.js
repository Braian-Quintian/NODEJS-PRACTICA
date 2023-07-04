

const tipoCambioEuro = 0.86; 
const tipoCambioLibra = 0.74;

function convertirDolaresAEuros(cantidadDolares) {
    const cantidadEuros = cantidadDolares * tipoCambioEuro;
    return cantidadEuros;
}

function convertirDolaresALibras(cantidadDolares) {
    const cantidadLibras = cantidadDolares * tipoCambioLibra;
    return cantidadLibras;
}

module.exports = { convertirDolaresAEuros, convertirDolaresALibras };
