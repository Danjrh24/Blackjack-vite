
/**
 * Esta funcion obtiene un valor de la carta
 * @param {String} carta Ejemplo: 3H 
 * @returns {Number} Retorna el valor de la carta
 */

export const valorCarta = (carta) => {
        if ( !carta ) {
            throw new Error('No se encuentra la carta')
        }
        const valor = carta.substring(0, carta.length-1);
        return ( valor === 'A') 
        ? 11 
        :( isNaN(valor) ) 
        ? 10 
        : valor * 1;
    }