import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','K','Q']
 * @returns {Array} Retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('TiposEspeciales es obligatorio como un arreglo de string');
    
    let deck = [];
    for ( let i = 2; i <= 10; i++) 
        for( let tipo of tiposDeCarta)
            deck.push(i + tipo);
        
    
    for(let especial of tiposEspeciales)
        for( let tipo of tiposDeCarta)
            deck.push(especial + tipo);
        
    
    return deck = _.shuffle(deck)
}