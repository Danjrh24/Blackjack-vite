
import _ from 'underscore';
import {crearDeck} from './usecases/crear-deck';
import { pedirCartas } from './usecases/pedir-cartas';
import { valorCarta } from './usecases/valor-carta';
import { addImage } from './usecases/add-cart-image';
import { btnPedirCarta, btnDetener, btnNuevo, jugadorCartasContainer, showPuntos } from './usecases/referencias-html';

const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C','D','H','S'],
        especiales = ['A','J','K','Q'];
        
    let puntosJugadores = [];
    
    //Esta función inicializa el juego 
    const inicializarJuego = ( numJugadores = 1) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        jugadorCartasContainer.forEach( (div) => div.innerHTML = '' );
        for (let i = 0 ; i < numJugadores ; i++){
            puntosJugadores.push(0);
        }
    }
    //Esta funcion desabilita los botones de pedir carta y detener
    const disabledButtons = (boolean) =>{
        btnPedirCarta.disabled = boolean;
        btnDetener.disabled = boolean;
    }
    //Esta funcion acumula los puntos de los jugadores y lo muestra
    const acumularPuntos = (turno,carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        showPuntos[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    //TURNO DE LA COMPUTADORA
    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora;
        do{
            const carta = addImage( deck, jugadorCartasContainer.length-1 );
            puntosComputadora = acumularPuntos(puntosJugadores.length-1,carta)
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

    //EVENTOS
    btnPedirCarta.addEventListener( 'click', () => {

        const carta = addImage( deck, 0 );
        const puntosJugador = acumularPuntos(0, carta);
        ( puntosJugador >= 21 ) 
        ? disabledButtons(true)
        : disabledButtons(false);
        setTimeout(() => {
            ( puntosJugador === 21 ) 
            ? (console.warn('21, genial!'), turnoComputadora(puntosJugador)) 
            :( puntosJugador > 21 ) ? (alert('Computadora gana')) 
            : ''
        }, 300);
        return puntosJugador;
    }) ;

    btnDetener.addEventListener('click', () => {
        btnPedirCarta.disable = true;
        turnoComputadora(puntosJugadores[0]);
    })

    btnNuevo.addEventListener('click', () => {

        console.clear();

        inicializarJuego(2);

        showPuntos.forEach( (elem) => elem.innerHTML = 0 );

        disabledButtons(false);

    })

    return {
        nuevoJuego: inicializarJuego
    };

})();






