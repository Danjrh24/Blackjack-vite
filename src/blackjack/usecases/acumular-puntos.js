
import { showPuntos, valorCarta } from '../usecases';

/** 
 * Esta funcion es para acumular los puntos del jugador
 * @param {Number} turno 
 * @param {String} carta Ejemplo: 3H 
 * @param {Array<Number>} puntosJugadores 
 * @returns {Number} Retorna los puntos del jugador
 */

export const acumularPuntos = (puntosJugadores, turno,carta) => {
        if ( !carta ) {
            throw new Error('No se encuentra la carta')
        } else if ( turno > puntosJugadores.length-1 ) {
            throw new Error('No hay tantos jugadores')
        }
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        showPuntos[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
}