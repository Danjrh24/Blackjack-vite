import { showPuntos } from "./referencias-html";
import { valorCarta } from "./valor-carta";

/** 
 * Esta funcion es para acumular los puntos del jugador
 * @param {Number} turno 
 * @param {String} carta Ejemplo: 3H 
 * @param {Array} puntosJugadores 
 * @returns {Number} Retorna los puntos del jugador
 */

export const acumularPuntos = (puntosJugadores, turno,carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        showPuntos[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
}