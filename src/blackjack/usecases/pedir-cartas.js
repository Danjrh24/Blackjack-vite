/**
 * Esta funcion pide una carta del deck
 * @param {Array<String>} deck Ejemplo: ['2C','3D','4H','5S']
 * @returns {String} Retorna una carta del deck
 */

export const pedirCartas = (deck) => {
        if (deck.length === 0 ){
            throw 'No hay cartas en el deck';
        };
        return deck.pop();
    }