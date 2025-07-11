
import { addImage, acumularPuntos, disabledButtons, jugadorCartasContainer } from '../usecases';


/**
 * Esta funcion controla el turno de la computadora
 * @param {Array<Number>} puntosJugadores 
 * @param {Array<String>} deck Ejemplo: ['2C','3D','4H','5S'] 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 */

export const turnoComputadora = ( puntosJugadores, deck, puntosMinimos ) => {
        if ( !puntosMinimos ) {
            throw new Error('Puntos minimos son necesarios');
        }
        if ( !deck ) {
            throw new Error('El Deck es necesario');
        }
        if ( !puntosJugadores ) {
            throw new Error('El array de puntosJugadores es necesario');
        }
        let puntosComputadora;
        do{
            const carta = addImage( puntosJugadores ,deck, jugadorCartasContainer.length-1 );
            puntosComputadora = acumularPuntos( puntosJugadores,puntosJugadores.length-1, carta )
        }while( (puntosComputadora < puntosMinimos) && puntosMinimos <= 21 );
        ( puntosComputadora >= 21 || puntosComputadora >= puntosMinimos ) 
        ? disabledButtons(true)
        : disabledButtons(false);
        setTimeout(() => {
            ( puntosComputadora === puntosMinimos ) 
            ? (alert('Nadie gana :('))
            :( puntosComputadora > 21 ) 
            ?(alert('Felicidades, ganaste!!')) 
            :(alert('Computadora gana'));
        }, 300);
    }
