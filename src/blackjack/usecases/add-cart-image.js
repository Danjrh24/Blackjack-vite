import { pedirCartas } from "./pedir-cartas";
import { jugadorCartasContainer } from "./referencias-html";
/**
 * Esta funcion es para agregar una imagen de la carta en el DOM
 * @param {Array<String>} deck Ejemplo: ['2C','3D','4H','5S'] 
 * @param {Number} turno
 * @returns {String} Retorna un carta del deck 
 */

export const addImage = ( puntosJugadores, deck, turno ) => {
        if ( !deck || deck.length === 0 ) {
            throw new Error('No hay cartas en el deck')
        } else if ( turno > puntosJugadores.length-1 ) {
            throw new Error('No hay tantos jugadores')
        }
        const carta = pedirCartas(deck);
        const cartaImg = document.createElement('img');
        jugadorCartasContainer[turno].append(cartaImg);
        cartaImg.className = 'carta';
        cartaImg.src = `assets/cartas/${carta}.png`
        return carta;
    } 