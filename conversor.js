const tipoCambioEuro = 0.86; 
const tipoCambioLibra = 0.74;

export function convertirDolaresAEuros(cantidadDolares) {
    const cantidadEuros = cantidadDolares * tipoCambioEuro;
    return cantidadEuros;
}

export function convertirDolaresALibras(cantidadDolares) {
    const cantidadLibras = cantidadDolares * tipoCambioLibra;
    return cantidadLibras;
}
